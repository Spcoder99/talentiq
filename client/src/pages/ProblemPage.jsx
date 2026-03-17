import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { PROBLEMS } from '../data/problems.js';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from '../components/ProblemDescription.jsx';
import OutputPanel from '../components/OutputPanel.jsx';
import CodeEditorPanel from '../components/CodeEditorPanel.jsx';
import { executeCode } from '../lib/judgeo.js';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer.jsx';
import { Loader2Icon } from 'lucide-react';

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Default problem state (like SessionPage)
  const defaultProblem = PROBLEMS['two-sum'];

  const [currentProblem, setCurrentProblem] = useState(defaultProblem);
  const [currentProblemId, setCurrentProblemId] = useState(id || 'two-sum');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(defaultProblem.starterCode[selectedLanguage]);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // -----------------------------
  // Fetch problem from backend primarily
  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    const fetchProblem = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/problems`);
        const problemsArray = Array.isArray(res?.data) ? res?.data : [];
        const problemFromDB = problemsArray.find(p => p?._id === id);

        if (problemFromDB) {
          setCurrentProblem(problemFromDB);
          setCurrentProblemId(id);
          setCode(problemFromDB?.starterCode?.[selectedLanguage] || "");
          setOutput(null);
        } else {
          // fallback to local PROBLEMS if backend missing
          const fallbackProblem = PROBLEMS[id] || PROBLEMS["two-sum"];
          setCurrentProblem(fallbackProblem);
          setCurrentProblemId(id);
          setCode(fallbackProblem?.starterCode?.[selectedLanguage] || "");
          setOutput(null);
        }
      } catch (err) {
        console.error(err);
        const fallbackProblem = PROBLEMS[id] || PROBLEMS["two-sum"];
        setCurrentProblem(fallbackProblem);
        setCurrentProblemId(id);
        setCode(fallbackProblem?.starterCode?.[selectedLanguage] || "");
        setOutput(null);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
      }
    };

    fetchProblem();
  }, [id, selectedLanguage]);

  // -----------------------------
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem?.starterCode[newLang] || "");
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => {
    setCurrentProblemId(newProblemId);
    navigate(`/problem/${newProblemId}`);
  };

  // const triggerConfetti = () => {
  //   confetti({ particleCount: 80, spread: 250, origin: { x: 0.2, y: 0.6 } });
  //   confetti({ particleCount: 80, spread: 250, origin: { x: 0.8, y: 0.6 } });
  // };

  const triggerConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;

    const defaults = {
      startVelocity: 45,
      spread: 360,
      ticks: 80,
      gravity: 0.9,
      zIndex: 1000
    };

    // 🎉 Side cannons (left + right)
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 }
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 }
    });

    // 🎆 Center burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });

    // ✨ Floating particles animation
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 60 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.4
        },
        scalar: Math.random() * 0.6 + 0.6
      });

    }, 200);
  };

  const triggerFailEffect = () => {
    const bar = document.createElement("div");
    bar.className = "error-pulse-bar";

    document.body.appendChild(bar);

    setTimeout(() => {
      bar.remove();
    }, 600);
  };

  const normalizeOutput = (output) => {
    if (!output) return "";
    return output
      .trim()
      .split("\n")
      .map(line =>
        line
          .trim()
          .replace(/'/g, '"')
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ",")
          .replace(/-0/g, "0")   // ⭐ ADD THIS LINE
      )
      .filter(line => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = ({ actualOutput, expectedOutput }) => {
    const normalizedActual = normalizeOutput(actualOutput || "");
    const normalizedExpected = normalizeOutput(expectedOutput || "");
    return normalizedActual === normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const result = await executeCode(selectedLanguage, code);
      setOutput(result);
      setIsRunning(false);

      if (result.success) {
        const expectedOutput = currentProblem?.expectedOutput[selectedLanguage];

        const testsPassed = checkIfTestsPassed({
          actualOutput: result?.output,
          expectedOutput
        });

        if (testsPassed) {
          triggerConfetti();
          toast.success("All tests passed! Great job!");
        } else {
          triggerFailEffect();
          toast.error("Tests failed. Keep trying & Check your output!");
        }
      } else {
        toast.error(result?.error?.message || "Code execution failed!");
      }
    } catch (err) {
      setIsRunning(false);
      toast.error(err?.message || "Something went wrong!");
    }
  };

  // -----------------------------
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col bg-base-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-lg text-gray-500">Loading Problem</p>
          </div>
        </div>
      </div>
    );
  }

  if (!currentProblem) {
    return (
      <div className="h-screen bg-base-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-red-500 text-lg">
          Problem not found!
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='h-screen bg-base-100 flex flex-col'>
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">

          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className='w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize' />

          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction='vertical'>

              <Panel defaultSize={63} minSize={30}>
                {!isLoading && currentProblem && (
                  <CodeEditorPanel
                    problemId={currentProblemId}
                    selectedLanguage={selectedLanguage}
                    code={code}
                    isRunning={isRunning}
                    onLanguageChange={handleLanguageChange}
                    onCodeChange={setCode}
                    onRunCode={handleRunCode}
                    problemDescription={currentProblem?.description?.text}
                    constraints={currentProblem?.constraints?.join(", ")}
                    expectedOutput={currentProblem?.expectedOutput?.[selectedLanguage]}
                    starterCode={currentProblem?.starterCode?.[selectedLanguage]}
                    userSolved={10}
                  />)}
              </Panel>

              <PanelResizeHandle className='h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize' />

              <Panel defaultSize={37} minSize={30}>
                <OutputPanel output={output} />
              </Panel>

            </PanelGroup>
          </Panel>

        </PanelGroup>
      </div>
      <Footer />
    </div>
  );
}

export default ProblemPage;