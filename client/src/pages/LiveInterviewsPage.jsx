// LiveInterviewsPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { VideoIcon } from "lucide-react";

export default function LiveInterviewsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="flex items-center gap-4 mb-6">
          <VideoIcon className="w-10 h-10 text-green-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Live Interviews
          </h1>
        </div>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Conduct real-time coding interviews with Skill IQ. Invite candidates, share problems, and evaluate code live.
          Our interactive editor supports multiple languages and gives you instant feedback to make hiring faster and smarter.
        </p>

        {/* Mock interactive section */}
        <div className="bg-base-100 rounded-2xl shadow-2xl p-8 grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">Interview Room</h2>
            <p className="text-base-content/70">
              Each session has a private room where you can see code, chat, and collaborate with your candidate in real-time.
            </p>
            <button className="btn btn-primary w-max">Create New Session</button>
          </div>
          <div className="bg-gray-800 rounded-xl flex items-center justify-center p-4">
            <p className="text-base-content/50">[Live coding editor preview]</p>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-accent mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            <li>Multiple language support (JavaScript, Python, Java, etc.)</li>
            <li>Real-time code collaboration and highlighting</li>
            <li>Integrated timer and scoring for interview sessions</li>
            <li>Instant code execution results with feedback</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}