
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { PROBLEMS } from '../data/problems.js';
import Navbar from '../components/Navbar.jsx';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from '../components/ProblemDescription.jsx';
import OutputPanel from '../components/OutputPanel.jsx';
import CodeEditorPanel from '../components/CodeEditorPanel.jsx';
import { executeCode } from '../lib/judgeo.js';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  // ---------------------------
  // Safe normalizeOutput
  const normalizeOutput = (output) => {
    if (!output) return "";
    return output
      .trim()
      .split("\n")
      .map(line =>
        line
          .trim()
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ",")
      )
      .filter(line => line.length > 0)
      .join("\n");
  };

  // ---------------------------
  // Fixed checkIfTestsPassed - object style
  const checkIfTestsPassed = ({ actualOutput, expectedOutput }) => {
    const normalizedActual = normalizeOutput(actualOutput || "");
    const normalizedExpected = normalizeOutput(expectedOutput || "");

    console.log(normalizedActual === normalizedExpected, { normalizedActual, normalizedExpected });
    return normalizedActual === normalizedExpected;
  };

  // ---------------------------
  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    try {
      const result = await executeCode(selectedLanguage, code);
      setOutput(result);
      setIsRunning(false);

      if (result.success) {
        const expectedOutput = currentProblem.expectedOutput[selectedLanguage];

        // Pass object to match destructuring
        const testsPassed = checkIfTestsPassed({
          actualOutput: result?.output,
          expectedOutput
        });

        console.log("ACTUAL:", result.output);
        console.log("EXPECTED:", expectedOutput);
        console.log("TESTS PASSED:", testsPassed);

        if (testsPassed) {
          triggerConfetti();
          toast.success("All tests passed! Great job!");
        } else {
          toast.error("Tests failed. Keep trying & Check your output!");
        }
      } else {
        // If code execution failed
        toast.error(result?.error?.message || "Code execution failed!");
      }
    } catch (err) {
      setIsRunning(false);
      toast.error(err?.message || "Something went wrong!");
    }
  };

  // ---------------------------
  return (
    <div className='h-screen bg-base-100 flex flex-col'>
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* Left Panel - problem description */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className='w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize' />

          {/* Right Panel - Code Editor & Output */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction='vertical'>
              {/* Code editor */}
              <Panel defaultSize={63} minSize={30}>
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <PanelResizeHandle className='h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize' />

              {/* Output */}
              <Panel defaultSize={37} minSize={30}>
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;