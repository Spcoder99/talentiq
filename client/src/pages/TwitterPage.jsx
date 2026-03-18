// TwitterPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TwitterIcon } from "lucide-react";

export default function TwitterPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <TwitterIcon className="w-10 h-10 text-blue-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            Twitter Profile
          </h1>
        </div>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Follow Skill IQ on Twitter to stay updated with new coding challenges,
          live session announcements, and tech insights. Join our growing developer community!
        </p>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-black font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Visit Twitter
        </a>
      </main>

      <Footer />
    </div>
  );
}