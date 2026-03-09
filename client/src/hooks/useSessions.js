import {useMutation, useQuery} from "@tanstack/react-query";
import { sessionApi } from "../api/sessions";
import { toast } from "react-hot-toast";


export const useCreateSession = () => {
    const result = useMutation({
        mutationKey: ["createSession"],
        mutationFn: sessionApi.createSession,
        onSuccess: () => toast.success("Session created successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
    });

    return result;
}

export const useActiveSessions = () => {
    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
       
    });

    return result;
}

export const useMyRecentSessions = () => {
    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getMyRecentSessions,
    });

    return result;
}


export const useSessionById = (sessionId) => {
    const result = useQuery({
        queryKey: ["session", sessionId],
        queryFn: () => sessionApi.getSessionById(sessionId),
        enabled: !!sessionId,
        refetchInterval: 5000, // Refetch every 5 seconds to get real-time updates
    });

    return result;
}


export const useJoinSession = (sessionId) => {
    const result = useMutation({
        mutationKey: ["joinSession", sessionId],
        mutationFn: () => sessionApi.joinSession(sessionId),
        onSuccess: () => toast.success("Joined session successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
    });

    return result;
}


export const useEndSession = (sessionId) => {
    const result = useMutation({
        mutationKey: ["endSession", sessionId],
        mutationFn: () => sessionApi.endSession(sessionId),
        onSuccess: () => toast.success("Session ended successfully"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
    });

    return result;
}

