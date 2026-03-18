// BlogPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BLOGS = [
  {
    id: "1",
    title: "Crack Coding Interviews",
    excerpt: "Daily DSA practice is key to acing technical interviews...",
    content: "Practice daily DSA problems, mock interviews, and real coding challenges. Track your progress and stay consistent to land your dream role!",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "System Design Mastery",
    excerpt: "Learn scalability and high-level architecture to solve complex problems...",
    content: "Understand system design patterns, scalability principles, and real-world architectures. Prepare effectively for senior-level interviews and design discussions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Top Coding Tips",
    excerpt: "Boost your coding efficiency and solve problems faster...",
    content: "Learn shortcuts, debugging tricks, and code optimization techniques to maximize efficiency during live coding sessions and interviews.",
    image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "4",
    title: "Frontend Performance Hacks",
    excerpt: "Speed up your web apps and impress interviewers...",
    content: "Learn tips for lazy loading, efficient rendering, and optimizing assets. Make your frontend apps lightning-fast and user-friendly.",
    image: "https://media.istockphoto.com/id/2253858632/photo/security-engineer-monitoring-scada-ot-system.jpg?s=1024x1024&w=is&k=20&c=BipgxY6P9VetxCrS3tO0-t7KRLj7OLs-YwtLLUxumaw="
  },
  {
    id: "5",
    title: "Backend Best Practices",
    excerpt: "Clean, scalable, and maintainable backend code...",
    content: "Implement clean architecture, proper REST API design, and efficient database queries. Ensure your backend is reliable and scalable.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">
        {!selectedBlog ? (
          <>
            <h1 className="text-4xl font-bold mb-8 text-center">Developer Blog</h1>
            <p className="text-center text-base-content/70 mb-12">
              Read the latest tips, guides, and insights to level up your coding skills.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOGS.map(blog => (
                <div
                  key={blog.id}
                  className="bg-base-100 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-base-content/70">{blog.excerpt}</p>
                    <div className="mt-4 text-primary font-semibold hover:underline">Read More →</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              className="btn btn-sm mb-6"
              onClick={() => setSelectedBlog(null)}
            >
              ← Back to Blog
            </button>
            <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">{selectedBlog.title}</h1>
                <p className="text-base-content/70 leading-relaxed">{selectedBlog.content}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}