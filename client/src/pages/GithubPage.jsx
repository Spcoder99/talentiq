// GithubPage.jsx
import React from "react";
// import Navbar from "/components/Navbar";
// import Footer from "../../components/Footer";
import { GithubIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GithubPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <GithubIcon className="w-10 h-10 text-green-400" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
            GitHub Profile
          </h1>
        </div>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Welcome to Skill IQ’s GitHub page! Here you can find all our projects, open-source contributions,
          and code examples. Explore repositories, star the ones you like, and follow our updates.
        </p>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Visit GitHub
        </a>
      </main>

      <Footer />
    </div>
  );
}