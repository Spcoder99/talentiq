import { useState, useEffect, useRef } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  const isInitializedRef = useRef(false);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {

      if (!session?.callId) return;

      // user must be part of session
      if (!isHost && !isParticipant) {
        setIsInitializingCall(false);
        return;
      }

      // session ended
      if (session.status === "completed") {
        setIsInitializingCall(false);
        return;
      }

      // prevent double initialization
      if (isInitializedRef.current) return;
      isInitializedRef.current = true;

      try {

        const { token, userId, userName, userImage } =
          await sessionApi.getStreamToken();

        // initialize video client
        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setStreamClient(client);

        // ---------------- CHAT CLIENT ----------------
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;

        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setChatClient(chatClientInstance);

        // ---------------- VIDEO CALL ----------------
        videoCall = client.call("default", session.callId);

        await videoCall.join();

        setCall(videoCall);

        // ---------------- CHAT CHANNEL ----------------
        const chatChannel = chatClientInstance.channel(
          "messaging",
          session.callId
        );

        await chatChannel.watch();

        setChannel(chatChannel);

      } catch (error) {

        toast.error("Failed to join video call");

        console.error("Error init call", error);

      } finally {

        setIsInitializingCall(false);

      }
    };

    if (session && !loadingSession) {
      initCall();
    }

    // ---------------- CLEANUP ----------------
    return () => {
      (async () => {
        try {

          if (videoCall) {
            try {
              await videoCall.leave();
            } catch (err) {
              if (!/already been left/.test(err.message)) {
                console.error("Cleanup error:", err);
              }
            }
          }

          if (chatClientInstance) {
            await chatClientInstance.disconnectUser();
          }

          await disconnectStreamClient();

        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };

  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;