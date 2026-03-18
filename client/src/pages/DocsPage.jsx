// DocsPage.jsx
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { RocketIcon, LockIcon, CodeIcon } from "lucide-react";

const DOCS = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <RocketIcon className="w-5 h-5 text-green-400" />,
    content: `
Welcome to **Skill IQ**, the modern platform for live coding interviews and collaboration.

## Create a Session

\`\`\`js
const session = await createSession({
  problem: "two-sum",
  difficulty: "easy"
});
\`\`\`

Start coding, share your session, and collaborate in real-time!
`
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: <LockIcon className="w-5 h-5 text-green-400" />,
    content: `
Skill IQ uses **Clerk** for authentication.

\`\`\`js
import { useUser } from '@clerk/clerk-react';

const { user } = useUser();
console.log(user.id);
\`\`\`

Users can sign in, sign up, and manage their profile seamlessly.
`
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: <CodeIcon className="w-5 h-5 text-green-400" />,
    content: `
### Create Session
\`\`\`http
POST /api/sessions
\`\`\`

Request Body:
\`\`\`json
{
  "problem": "two-sum",
  "difficulty": "easy"
}
\`\`\`
`
  }
];

export default function DocsPage() {
  const sectionRefs = useRef({});
  const [copiedStates, setCopiedStates] = useState({});
  const [activeSection, setActiveSection] = useState(DOCS[0].id);

  const handleCopy = (sectionId, codeId, text) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({
      ...prev,
      [sectionId]: { ...(prev[sectionId] || {}), [codeId]: true }
    }));
    setTimeout(() => {
      setCopiedStates(prev => ({
        ...prev,
        [sectionId]: { ...(prev[sectionId] || {}), [codeId]: false }
      }));
    }, 1500);
  };

  const scrollToSection = (id) => {
    const navbarHeight = 80; 
    const element = sectionRefs.current[id];
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = DOCS.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[DOCS[i].id];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(DOCS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row p-6 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-dark-800 p-6 rounded-xl shadow-xl sticky top-20 h-max space-y-4">
          <h2 className="font-bold text-xl mb-4 text-center text-green-400">Docs Menu</h2>
          {DOCS.map(d => (
            <button
              key={d.id}
              onClick={() => scrollToSection(d.id)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                ${activeSection === d.id 
                  ? "bg-green-700 text-white font-semibold shadow-lg" 
                  : "hover:bg-green-700/20 text-gray-300 hover:shadow-md"
                }`}
            >
              {d.icon} {d.title}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 space-y-16">
          {DOCS.map(d => (
            <section
              key={d.id}
              ref={el => (sectionRefs.current[d.id] = el)}
              className="bg-dark-700 p-8 rounded-xl shadow-lg border border-dark-600 scroll-mt-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{d.icon}</div>
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                  {d.title}
                </h1>
              </div>

              <ReactMarkdown
                components={{
                  code({ inline, children, node }) {
                    const codeId = node.position.start.line;
                    if (inline) return <code className="bg-dark-600 px-2 py-1 rounded">{children}</code>;
                    return (
                      <div className="relative bg-dark-900 p-4 rounded-lg mb-6 shadow-lg group">
                        <button
                          onClick={() => handleCopy(d.id, codeId, children.toString())}
                          className={`absolute top-2 right-2 text-xs px-3 py-1 rounded shadow-sm transition
                            ${copiedStates[d.id]?.[codeId] 
                              ? "bg-green-500 text-white" 
                              : "bg-dark-600 text-gray-100 hover:bg-green-500/40"
                            }`}
                        >
                          {copiedStates[d.id]?.[codeId] ? "Copied!" : "Copy"}
                        </button>
                        <pre className="overflow-x-auto text-green-400">{children}</pre>
                      </div>
                    );
                  }
                }}
              >
                {d.content}
              </ReactMarkdown>
            </section>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}