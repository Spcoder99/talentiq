// LinkedinPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LinkedinIcon } from "lucide-react";

export default function LinkedinPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <LinkedinIcon className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            LinkedIn Profile
          </h1>
        </div>

        <p className="text-base-content/70 text-lg leading-relaxed">
          Connect with Skill IQ on LinkedIn to see our professional updates,
          team announcements, and networking opportunities in the developer community.
        </p>

        <a
           href="https://www.linkedin.com/in/shubhantakpandey99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Visit LinkedIn
        </a>
      </main>

      <Footer />
    </div>
  );
}
