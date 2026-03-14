import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { PROBLEMS } from '../data/problems';
import axios from 'axios';
import { useEndSession, useJoinSession, useSessionById } from '../hooks/useSessions';
import { executeCode } from '../lib/judgeo';
import Navbar from '../components/Navbar';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { getDifficultyBadgeClass } from '../lib/utils.js';
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from 'lucide-react';
import CodeEditorPanel from '../components/CodeEditorPanel';
import OutputPanel from '../components/OutputPanel';
import useStreamClient from '../hooks/useStreamClient';
import { StreamCall, StreamVideo } from '@stream-io/video-react-sdk';
import VideoCallUI from '../components/VideoCallUI.jsx';

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [inviteCodeInput, setInviteCodeInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);
  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
    session,
    loadingSession,
    isHost,
    isParticipant
  );

  // -----------------------------
  // Problem data
  const [problemData, setProblemData] = useState(PROBLEMS['two-sum']);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(PROBLEMS['two-sum'].starterCode[selectedLanguage]);
  const [isProblemLoading, setIsProblemLoading] = useState(true);

  // Fetch backend problem if session.problem exists
  useEffect(() => {
    if (!session?.problem) {
      setIsProblemLoading(false);
      return;
    }

    setIsProblemLoading(true);

    const fetchProblem = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/problems`);
        const problemsArray = Array.isArray(res?.data) ? res?.data : [];
        const problemFromDB = problemsArray.find(p => p?.title === session?.problem);

        const finalProblem =
          problemFromDB ||
          Object.values(PROBLEMS).find(p => p?.title === session?.problem) ||
          PROBLEMS['two-sum'];

        setProblemData(finalProblem);
        setCode(finalProblem?.starterCode?.[selectedLanguage] || '');
      } catch (err) {
        console.error(err);
        const fallbackProblem =
          Object.values(PROBLEMS).find(p => p?.title === session?.problem) || PROBLEMS['two-sum'];
        setProblemData(fallbackProblem);
        setCode(fallbackProblem?.starterCode?.[selectedLanguage] || '');
      } finally {
        setTimeout(() => setIsProblemLoading(false), 500);
      }
    };

    fetchProblem();
  }, [session?.problem, selectedLanguage]);

  // Update code when language changes
  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData?.starterCode?.[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  // // Auto-join session if not already joined
  // useEffect(() => {
  //   if (!session || !user || loadingSession) return;
  //   if (isHost || isParticipant) return;

  //   joinSessionMutation.mutate(id, { onSuccess: refetch });
  // }, [session, user, loadingSession, isHost, isParticipant, id]);

  useEffect(() => {

    if (!session?._id) return;
    if (!user?.id) return;

    if (isHost || isParticipant) return;

    // auto join only PUBLIC sessions
    if (!session.isPrivate) {

      joinSessionMutation.mutate(
        { id: session._id, inviteCode: null },
        {
          onSuccess: () => {
            refetch();
          }
        }
      );

    }

  }, [session?._id, user?.id]);

  // Redirect if session ends
  useEffect(() => {
    if (!session || loadingSession) return;
    if (session?.status === 'completed') navigate('/dashboard');
  }, [session, loadingSession, navigate]);

  const handleLanguageChange = e => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    const starterCode = problemData?.starterCode?.[newLanguage] || '';
    setCode(starterCode);
    setOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm('Are you sure you want to end the session? All participants will be notified.')) {
      endSessionMutation.mutate(id, { onSuccess: () => navigate('/dashboard') });
    }
  };


  const handleJoinPrivateSession = () => {

    joinSessionMutation.mutate(
      { id: session._id, inviteCode: inviteCodeInput },
      {
        onSuccess: () => {
          refetch();
        }
      }
    );

  };

  // -----------------------------
  // Show loading screen while session or problem is loading
  if (loadingSession || isProblemLoading) {
    return (
      <div className="h-screen w-screen flex flex-col bg-base-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-lg text-gray-500">Loading session...</p>
          </div>
        </div>
      </div>
    );
  }

  if (session?.isPrivate && !isHost && !isParticipant) {
    return (
      <div className="h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center justify-center">
          <div className="card bg-base-100 shadow-xl p-6 w-96">

            <h2 className="text-xl font-bold mb-4 text-center">
              Enter Invite Code
            </h2>

            <input
              type="text"
              placeholder="Invite Code"
              value={inviteCodeInput}
              onChange={(e) => setInviteCodeInput(e.target.value)}
              className="input input-bordered w-full mb-4"
            />

            <button
              className="btn btn-primary w-full"
              onClick={handleJoinPrivateSession}
              disabled={joinSessionMutation.isPending}
            >
              {joinSessionMutation.isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Joining...
                </>
              ) : (
                "Join Session"
              )}
            </button>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* LEFT PANEL _ CODE EDITOR & PROBLEM DETAILS */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
              {/* PROBLEM DESC PANEL */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full overflow-y-auto bg-base-200">
                  <div className="p-6 bg-base-100 border-b border-base-300">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold text-base-content">{session?.problem}</h1>
                        {problemData?.category && (
                          <p className="text-base-content/60 mt-1">{problemData?.category}</p>
                        )}
                        <p className="text-base-content/60 mt-2">
                          Host: {session?.host?.name || 'Loading...'} •{' '}
                          {session?.participant ? 2 : 1}/2 Participants
                        </p>

                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`badge badge-lg ${getDifficultyBadgeClass(session?.difficulty)}`}
                        >
                          {session?.difficulty?.charAt(0).toUpperCase() +
                            session?.difficulty?.slice(1) || 'Easy'}
                        </span>
                        {isHost && session?.status === 'active' && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error btn-sm gap-2"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                          </button>
                        )}
                        {session?.status === 'completed' && (
                          <span className="badge badge-ghost badge-lg">Completed</span>
                        )}
                      </div>
                    </div>

                    {isHost && session?.isPrivate && (
                      <div className="bg-base-200 border border-base-300 rounded-md mt-3 px-3 py-5 text-sm space-y-1">

                        {/* Line 1 - Link */}
                        <div className="flex items-center gap-2 flex-wrap mb-4">
                          <span className="opacity-70">Link:</span>

                          <span className="break-all">
                            {window.location.origin}/session/{session?._id}
                          </span>

                          <button
                            className="btn btn-info btn-xs"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                `${window.location.origin}/session/${session?._id}`
                              )
                            }
                          >
                            Copy
                          </button>
                        </div>

                        {/* Line 2 - Code */}
                        <div className="flex items-center gap-2">
                          <span className="opacity-70">Code:</span>

                          <span className="font-mono font-semibold">
                            {session?.inviteCode}
                          </span>

                          <button
                            className="btn btn-info btn-xs"
                            onClick={() =>
                              navigator.clipboard.writeText(session?.inviteCode)
                            }
                          >
                            Copy
                          </button>
                        </div>

                      </div>
                    )}
                  </div>

                  {/* Problem Description, Examples, Constraints */}
                  <div className="p-6 space-y-6">
                    {problemData?.description && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Description</h2>
                        <div className="space-y-3 text-base leading-relaxed">
                          <p className="text-base-content/90">{problemData?.description?.text}</p>
                          {problemData?.description?.notes?.map((note, idx) => (
                            <p key={idx} className="text-base-content/90">{note}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {problemData?.examples?.length > 0 && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Examples</h2>
                        <div className="space-y-4">
                          {problemData?.examples?.map((ex, idx) => (
                            <div key={idx}>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="badge badge-sm">{idx + 1}</span>
                                <p className="font-semibold text-base-content">Example {idx + 1}</p>
                              </div>
                              <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                <div className="flex gap-2">
                                  <span className="text-primary font-bold min-w-[70px]">Input:</span>
                                  <span>{ex?.input}</span>
                                </div>
                                <div className="flex gap-2">
                                  <span className="text-secondary font-bold min-w-[70px]">Output:</span>
                                  <span>{ex?.output}</span>
                                </div>
                                {ex?.explanation && (
                                  <div className="pt-2 border-t border-base-300 mt-2">
                                    <span className="text-base-content/60 font-sans text-xs">
                                      <span className="font-semibold">Explanation:</span> {ex?.explanation}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {problemData?.constraints?.length > 0 && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Constraints</h2>
                        <ul className="space-y-2 text-base-content/90">
                          {problemData?.constraints?.map((c, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <code className="text-sm">{c}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              {/* CODE EDITOR PANEL */}
              <Panel defaultSize={50} minSize={20}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={63} minSize={30}>
                    <CodeEditorPanel
                      problemId={problemData?.id}
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={setCode}
                      onRunCode={handleRunCode}
                      problemDescription={problemData?.description?.text}
                      constraints={problemData?.constraints?.join(', ')}
                      expectedOutput={problemData?.expectedOutput?.[selectedLanguage]}
                      starterCode={problemData?.starterCode?.[selectedLanguage]}
                      userSolved={10}
                    />
                  </Panel>

                  <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                  <Panel defaultSize={37} minSize={15}>
                    <OutputPanel output={output} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-col-resize" />



          {/* RIGHT PANEL _ VIDEO CALLS & CHAT */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full bg-base-200 p-4 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Connecting to video call...</p>
                  </div>
                </div>
              ) : !isInitializingCall && (!streamClient || !call) ? (
                <div className="h-full flex items-center justify-center">
                  <div className="card bg-base-100 shadow-xl max-w-md">
                    <div className="card-body items-center text-center">
                      <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                        <PhoneOffIcon className="w-12 h-12 text-error" />
                      </div>
                      <h2 className="card-title text-2xl">Connection Failed</h2>
                      <p className="text-base-content/70">Unable to connect to the video call</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default SessionPage;