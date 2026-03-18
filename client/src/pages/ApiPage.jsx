// ApiPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApiPage() {
  const [copied, setCopied] = useState("");

  // Sample API endpoints
  const endpoints = [
    {
      title: "Create Session",
      method: "POST",
      route: "/api/sessions",
      description: "Create a new coding session with a problem and difficulty level.",
      requestBody: `{
  "problem": "two-sum",
  "difficulty": "easy",
  "isPrivate": false
}`,
      responseBody: `{
  "success": true,
  "session": {
    "_id": "12345",
    "problem": "two-sum",
    "difficulty": "easy"
  }
}`
    },
    {
      title: "Get Sessions",
      method: "GET",
      route: "/api/sessions",
      description: "Fetch all active sessions for the current user.",
      requestBody: `None`,
      responseBody: `[
  {
    "_id": "12345",
    "problem": "two-sum",
    "difficulty": "easy"
  }
]`
    },
    {
      title: "End Session",
      method: "POST",
      route: "/api/sessions/:id/end",
      description: "End a live coding session.",
      requestBody: `{
  "sessionId": "12345"
}`,
      responseBody: `{
  "success": true,
  "message": "Session ended"
}`
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8 text-center">API Reference</h1>
        <p className="text-center text-base-content/70 mb-10">
          Explore our endpoints to integrate Skill IQ functionality into your apps.
        </p>

        <div className="grid gap-8">
          {endpoints.map((ep, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{ep.title}</h2>
                <span className={`px-2 py-1 rounded text-white font-mono text-sm ${
                  ep.method === "POST" ? "bg-primary" :
                  ep.method === "GET" ? "bg-secondary" : "bg-accent"
                }`}>{ep.method}</span>
              </div>

              {/* Description */}
              <p className="text-base-content/70 mb-4">{ep.description}</p>

              {/* Route */}
              <div className="flex justify-between items-center bg-base-300 p-2 rounded mb-4">
                <code className="font-mono">{ep.route}</code>
                <button
                  onClick={() => handleCopy(ep.route)}
                  className="btn btn-xs btn-outline"
                >
                  {copied === ep.route ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Request Body */}
              <div className="mb-4">
                <h3 className="font-semibold mb-1">Request Body</h3>
                <pre className="bg-black text-green-400 p-4 rounded relative">
                  <code>{ep.requestBody}</code>
                  <button
                    onClick={() => handleCopy(ep.requestBody)}
                    className="absolute top-2 right-2 text-xs bg-base-200 px-2 py-1 rounded"
                  >
                    {copied === ep.requestBody ? "Copied!" : "Copy"}
                  </button>
                </pre>
              </div>

              {/* Response Body */}
              <div>
                <h3 className="font-semibold mb-1">Response</h3>
                <pre className="bg-black text-green-400 p-4 rounded relative">
                  <code>{ep.responseBody}</code>
                  <button
                    onClick={() => handleCopy(ep.responseBody)}
                    className="absolute top-2 right-2 text-xs bg-base-200 px-2 py-1 rounded"
                  >
                    {copied === ep.responseBody ? "Copied!" : "Copy"}
                  </button>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}