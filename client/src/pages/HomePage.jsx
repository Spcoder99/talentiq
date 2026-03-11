import React from 'react'
import { Link } from 'react-router'
import { CheckIcon, Code2Icon, SparklesIcon, SquareTerminalIcon, UsersIcon, VideoIcon, ZapIcon } from 'lucide-react'
import { SignInButton } from '@clerk/clerk-react'
import { ArrowRightIcon } from 'lucide-react'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="bg-linear-to-br from-base-100 via-base-200 to-base-300">
      {/* Navbar */}

      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className='size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
              <SquareTerminalIcon className='size-6 text-white' />
            </div>

            <div className='flex flex-col'>
              <span className='font-black text-xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider'>
                Skill IQ
              </span>
              <span className='text-xs text-base-content/60 font-medium -mt-1'>Code Together</span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton
            mode="modal"
            appearance={{
              variables: {
                colorPrimary: "#22c55e",
                colorBackground: "#020617",
                colorInputBackground: "#1e293b",
                colorText: "#f8fafc",
                colorTextSecondary: "#94a3b8",
                colorNeutral: "#f8fafc",
                colorInputText: "#f8fafc",
                borderRadius: "12px",
              },
            }}
          >
            <button className="group px-6 py-3 bg-linear-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Get Started Free</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>

        </div>
      </nav>


      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-32 items-center ">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg">
              <ZapIcon className="size-4" />
              Real-Time Coding Interviews
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="text-base-content">
                Master Together
              </span>
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
              Skill IQ is a modern platform designed for developers to conduct live coding interviews.
              practice technical problems, and collaborate with teammates in real-time using video.
            </p>

            {/* FEATURES PILLS */}
            <div className='flex flex-wrap gap-3'>
              <div className='badge badge-lg badge-outline'>
                <CheckIcon className='size-4 text-success' />
                Live Video Interviews
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Multi-Language
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton
                mode="modal"
                appearance={{
                  variables: {
                    colorPrimary: "#22c55e",
                    colorBackground: "#020617",
                    colorInputBackground: "#1e293b",
                    colorText: "#f8fafc",
                    colorTextSecondary: "#94a3b8",
                    colorNeutral: "#f8fafc",
                    colorInputText: "#f8fafc",
                    borderRadius: "12px",
                  },
                }}
              >
                <button className="btn btn-primary btn-lg">
                  Start Interview Session
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              <label htmlFor="demo-video" className="btn btn-outline btn-lg">
                <VideoIcon className="size-5" />
                Watch Demo
              </label>
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
              <div className="stat">
                <div className="stat-value text-primary">7K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">20K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">97.9%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img src="/hero4.png" alt="CodeCollab Platform" className="w-[94%] h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500" />

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary font-mono">Succeed</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="card bg-base-100 shadow-xl  border border-base-300
  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl 
   hover:border-primary/50">

            <div className="card-body items-center text-center">

              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 
      transition-all duration-300 
      group-hover:scale-110">

                <VideoIcon className="size-8 text-primary transition-transform duration-300 hover:scale-110" />

              </div>

              <h3 className="card-title">Face-to-Face Interviews</h3>

              <p className="text-base-content/70">
                Conduct real-time video interviews with candidates and discuss
                solutions seamlessly while coding together.
              </p>

            </div>
          </div>


          {/* Feature 2 */}
          <div className="card bg-base-100 shadow-xl  border border-base-300
  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl 
   hover:border-primary/50">

            <div className="card-body items-center text-center">

              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 
      transition-all duration-300">

                <Code2Icon className="size-8 text-primary transition-transform duration-300 hover:scale-110" />

              </div>

              <h3 className="card-title">Live Code Editor</h3>

              <p className="text-base-content/70">
                Write, run, and collaborate on code with syntax highlighting,
                multiple languages, and real-time updates.
              </p>

            </div>
          </div>


          {/* Feature 3 */}
          <div className="card bg-base-100 shadow-xl  border border-base-300
  transition-all duration-300 
  hover:-translate-y-2 hover:shadow-2xl 
 hover:border-primary/50">

            <div className="card-body items-center text-center">

              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 
      transition-all duration-300">

                <UsersIcon className="size-8 text-primary transition-transform duration-300 hover:scale-110" />

              </div>

              <h3 className="card-title">Smooth Collaboration</h3>

              <p className="text-base-content/70">
                Share screens, review solutions together, and work collaboratively
                with teammates or candidates in one unified workspace.
              </p>

            </div>
          </div>

        </div>
      </div>

      <input type="checkbox" id="demo-video" className="modal-toggle" />

      <div className="modal backdrop-blur-sm">

        <div className="modal-box max-w-5xl p-0 bg-base-100 rounded-2xl shadow-2xl border border-base-300  border-primary/30 relative">

          {/* CLOSE BUTTON */}
          <label
            htmlFor="demo-video"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10"
          >
            ✕
          </label>

          {/* VIDEO HEADER */}
          <div className="px-6 py-4 border-b border-primary/30 border-base-300 flex items-center justify-between">
            <h3 className="font-semibold text-lg">Skill IQ Demo</h3>
          </div>

          {/* VIDEO CONTAINER */}
          <div className="p-4">

            <div className="rounded-xl overflow-hidden shadow-lg border border-base-300 border-primary/40">

              <div className="w-full aspect-video bg-black">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Skill IQ Demo"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TESTIMONIALS */}
      <Footer />
    </div>
  )
}

export default HomePage
