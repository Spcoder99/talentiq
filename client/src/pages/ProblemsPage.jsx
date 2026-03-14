import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { PROBLEMS } from '../data/problems.js'
import { ChevronRightIcon, Code2Icon, Loader2Icon } from 'lucide-react';
import { getDifficultyBadgeClass } from '../lib/utils.js';
import { Link } from 'react-router';
import Footer from '../components/Footer.jsx';
import { useQuery } from "@tanstack/react-query";
import { fetchAIRecommendedProblems, fetchProblems } from "../api/problemApi";

const ProblemsPage = () => {

  const [aiMode, setAiMode] = useState(false)
  const [aiProblems, setAiProblems] = useState([])

  const handleAIRecommendations = async () => {
    const data = await fetchAIRecommendedProblems()
    setAiProblems(data)
    setAiMode(true)
  }

  // Fetch backend problems
  const { data: apiProblems, isLoading } = useQuery({
    queryKey: ["problems"],
    queryFn: fetchProblems
  });


  // fallback to local PROBLEMS if backend fails
  const backendProblems = Array.isArray(apiProblems) && apiProblems?.length > 0
    ? apiProblems
    : Object.values(PROBLEMS);

  const displayedProblems = aiMode ? aiProblems : backendProblems

  if (isLoading) {
   return (
      <div className="h-screen w-screen flex flex-col bg-base-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-lg text-gray-500">Loading Problems</p>
          </div>
        </div>
      </div>
    );
  }

  const easyProblemsCount = displayedProblems.filter(p => p?.difficulty === "Easy").length
  const mediumProblemsCount = displayedProblems.filter(p => p?.difficulty === "Medium").length
  const hardProblemsCount = displayedProblems.filter(p => p?.difficulty === "Hard").length

  return (
    <div className='min-h-screen bg-base-200' >
      <Navbar />

      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Headers */}
        <div className="mb-8">
          <h1 className='text-4xl font-bold mb-2'>Practise Problems</h1>
          <p className='text-base-content/70'>
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleAIRecommendations}
            className={`btn btn-primary btn-sm ${aiMode ? 'hidden' : ''}`}
          >
            🤖 AI Recommended Problems
          </button>

          {aiMode && (
            <button
              onClick={() => setAiMode(false)}
              className="btn btn-outline btn-sm"
            >
              Show All Problems
            </button>
          )}
        </div>

        {/* Problem List */}
        <div className='space-y-4'>
          {displayedProblems?.map((problem) => (
            <Link key={problem?.id} to={`/problem/${problem?.id}`} className="card bg-base-100 border border-base-300 shadow-sm 
hover:shadow-xl hover:-translate-y-1 
hover:border-primary/40 hover:scale-[1.01]
transition-all duration-300 ease-out">
              <div className='card-body'>
                <div className='flex items-center justify-between gap-4'>
                  {/* LEFT SIDE */}
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className='size-6 text-primary' />
                      </div>
                      <div className='flex-1'>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold">{problem?.title}</h2>
                          <span className={`badge ${getDifficultyBadgeClass(problem?.difficulty)}`}>
                            {problem?.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">{problem?.category}</p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">{problem?.description?.text}</p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className='mt-12 card bg-base-100 shadow-lg'>
          <div className="card-body">
            <div className='stats stats-vertical lg:stats-horizontal'>
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className='stat-value text-primary'>{displayedProblems?.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProblemsPage