import {
  useUser
} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";
import CommunityPage from "./pages/CommunityPage";
import ApiPage from "./pages/ApiPage";
import DocsPage from "./pages/DocsPage";
import BlogPage from "./pages/BlogPage";
import GithubPage from "./pages/GithubPage";
import TwitterPage from "./pages/TwitterPage";
import LinkedinPage from "./pages/LinkedinPage";
import LiveInterviewsPage from "./pages/LiveInterviewsPage";
import CollaborationToolsPage from "./pages/CollaborationToolsPage";
// import ProblemPage from "./pages/ProblemPage";


function App() {

  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
        <Route path="/community" element={isSignedIn ? <CommunityPage /> : <Navigate to={"/"} />} />
        <Route path="/api" element={isSignedIn ? <ApiPage /> : <Navigate to={"/"} />} />
        <Route path="/documentation" element={isSignedIn ? <DocsPage /> : <Navigate to={"/"} />} />
        <Route path="/blog" element={isSignedIn ? <BlogPage /> : <Navigate to={"/"} />} />
        <Route path="/live-interviews" element={isSignedIn ? <LiveInterviewsPage /> : <Navigate to={"/"} />} />
        <Route path="/collaboration-tools" element={isSignedIn ? <CollaborationToolsPage /> : <Navigate to={"/"} />} />
        <Route path="/github" element={<GithubPage />} />
        <Route path="/twitter" element={<TwitterPage />} />
        <Route path="/linkedin" element={<LinkedinPage />} />
      </Routes>
      <Toaster position="bottom-right" toastOptions={{ duration: 2500 }} />
    </>
  );
}

export default App;
