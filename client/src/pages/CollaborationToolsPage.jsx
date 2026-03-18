// CollaborationToolsPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UsersIcon, MessageSquareIcon } from "lucide-react";

export default function CollaborationToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="flex items-center gap-4 mb-6">
          <UsersIcon className="w-10 h-10 text-green-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Collaboration Tools
          </h1>
        </div>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Skill IQ provides advanced collaboration tools for developers and teams.
          Share code, debug together, leave comments, and collaborate in real-time to accelerate problem solving.
        </p>

        {/* Tools Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <MessageSquareIcon className="w-8 h-8 text-primary mb-3"/>
            <h2 className="font-bold text-xl mb-2">Live Chat</h2>
            <p className="text-base-content/70">
              Communicate instantly with team members inside sessions.
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <UsersIcon className="w-8 h-8 text-secondary mb-3"/>
            <h2 className="font-bold text-xl mb-2">Team Collaboration</h2>
            <p className="text-base-content/70">
              Collaborate with multiple participants in real-time coding sessions.
            </p>
          </div>

          <div className="bg-base-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition">
            <MessageSquareIcon className="w-8 h-8 text-accent mb-3"/>
            <h2 className="font-bold text-xl mb-2">Code Reviews</h2>
            <p className="text-base-content/70">
              Leave feedback and review code collaboratively for better learning.
            </p>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-base-content/70 space-y-2">
            <li>Create a session or join an existing one.</li>
            <li>Share your screen or code editor with your team.</li>
            <li>Collaborate in real-time with code, comments, and chat.</li>
            <li>Save session history and revisit past discussions.</li>
          </ol>
        </div>
      </main>

      <Footer />
    </div>
  );
}