import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";

export default function AIHintsPanel({
  problemId,
  language,
  setCode,
  starterCode,
  setHint,
  problemDescription,
  constraints,
  expectedOutput,
  userSolved,
}) {
  const [loadingHints, setLoadingHints] = useState(false);
  const [loadingFull, setLoadingFull] = useState(false);

  useEffect(() => {
    setCode(starterCode);
    setHint(null);
  }, [starterCode]);

  /* =========================
      FETCH HINTS
  ========================= */
  const fetchHints = async () => {
    try {
      setLoadingHints(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/ai/hints/${problemId}/${language}`
      );

      const hintText = `
Hint 1: ${res?.data?.hints?.[0]?.hintText || ""}
Hint 2: ${res?.data?.hints?.[1]?.hintText || ""}
`;

      // fake AI delay
      setTimeout(() => {
        setHint(hintText);

        if (res?.data?.starterCode) {
          setCode(res?.data?.starterCode);
        }

        setLoadingHints(false);
      }, 3100);

    } catch (err) {
      console.error("Hints fetch error:", err);
      setLoadingHints(false);
    }
  };

  /* =========================
      FETCH FULL CODE
  ========================= */
  const fetchFullCode = async () => {
    try {
      setLoadingFull(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/ai/fullcode/${problemId}/${language}`
      );

      setTimeout(() => {
        if (res?.data?.fullCode) {
          setCode(res?.data?.fullCode);
        }

        setHint(null);
        setLoadingFull(false);
      }, 6400);

    } catch (err) {
      console.error("Full code fetch error:", err);
      setLoadingFull(false);
    }
  };

  return (
    <div className="flex gap-2">

      <button
        className="btn btn-sm btn-outline"
        onClick={fetchHints}
        disabled={loadingHints || loadingFull}
      >
        {loadingHints ? (
          <>
            <Loader2Icon className="size-4 animate-spin mr-1" />
            Thinking...
          </>
        ) : (
          "AI Hints"
        )}
      </button>

      <button
        className="btn btn-sm btn-outline"
        onClick={fetchFullCode}
        disabled={loadingFull || loadingHints}
      >
        {loadingFull ? (
          <>
            <Loader2Icon className="size-4 animate-spin mr-1" />
            Generating...
          </>
        ) : (
          "AI Code"
        )}
      </button>

    </div>
  );
}
