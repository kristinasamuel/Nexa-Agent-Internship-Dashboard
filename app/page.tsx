import React from 'react';
import { 
  FaRobot, 
  FaCalculator, 
  FaTools, 
  FaDatabase, 
  FaBrain, 
  FaUsers, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaExternalLinkAlt, 
  FaVideo 
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlineAcademicCap } from 'react-icons/hi';

const projects = [
  {
    title: "Tool-Calling AI Agent",
    level: "Beginner",
    features: ["Function calling", "JSON response", "Error handling"],
    icon: <FaRobot />,
    demoLink: "https://youtu.be/w1dEv5bn0vo?si=hr2HQQHwNLS9yqXO",
    liveLink: "https://nexe-agent-agentic-ai-developer.vercel.app/",
    repoLink: "https://github.com/kristinasamuel/Nexe-Agent-Agentic-AI-Developer-Internship-Tasks-/tree/main/BEGINNER/Tool-Calling-Ai-Agent"
  },
  {
    title: "AI Calculator Agent",
    level: "Beginner",
    features: ["Math operations", "Memory", "Structured output"],
    icon: <FaCalculator />,
    demoLink: "https://youtu.be/CRRHIoYHju4?si=yDvz8KqMcCcxLZBe",
    liveLink: "https://nexe-agent-agentic-ai-developer-int.vercel.app/",
    repoLink: "https://github.com/kristinasamuel/Nexe-Agent-Agentic-AI-Developer-Internship-Tasks-/tree/main/BEGINNER/Ai-Calculator-Agent"
  },
  {
    title: "Multi-Tool Agent",
    level: "Intermediate",
    features: ["Web search", "Save to DB", "Send email"],
    icon: <FaTools />,
    demoLink: "https://youtu.be/Yq0cJFwXEcU?si=jTOmJsmjByyzdEcl",
    liveLink: "https://nexe-agent-agentic-ai-developer-intermediate-tool-agent.vercel.app/",
    repoLink: "https://github.com/kristinasamuel/Nexe-Agent-Agentic-AI-Developer-Internship-Tasks-/tree/main/INTERMEDIATE/Multi-Tool-Agent"
  },
  {
    title: "RAG Assistant",
    level: "Intermediate",
    features: ["Upload documents", "Vector store", "Contextual answers"],
    icon: <FaDatabase />,
    demoLink: "https://youtu.be/SO61OObUyMs?si=DOou7t_Od_t5lpdG",
    liveLink: "https://nexe-agent-agentic-ai-developer-rag-assistant.vercel.app/",
    repoLink: "https://github.com/kristinasamuel/Nexe-Agent-Agentic-AI-Developer-Internship-Tasks-/tree/main/INTERMEDIATE/RAG-Assistant"
  },
  {
    title: "Autonomous Business Agent",
    level: "Advanced",
    features: ["Multi-step reasoning", "Task planning", "Execution logs"],
    icon: <FaBrain />,
    demoLink: "https://youtu.be/Pmp9wJyD30Q?si=n7_GPYyfZgMnUmiB",
    liveLink: "https://nexe-agent-agentic-ai-developer-autonomous-business-agent.vercel.app/",
    repoLink: "https://github.com/kristinasamuel/Nexe-Agent-Agentic-AI-Developer-Internship-Tasks-/tree/main/ADVANCED/Autonomous-Business-Agent"
  },
  {
    title: "Multi-Agent System",
    level: "Advanced",
    features: ["Separate Agents", "Communication Layer", "Task Delegation"],
    icon: <FaUsers />,
    demoLink: "#",
    liveLink: "#",
    repoLink: "#"
  },
];

const taskDetails = [
  {
    title: "BEGINNER",
    color: "from-blue-500 to-cyan-500",
    projects: [
      { name: "Tool-Calling AI Agent", items: ["Function calling", "JSON response", "Error handling"] },
      { name: "AI Calculator Agent", items: ["Math operations", "Memory", "Structured output"] }
    ]
  },
  {
    title: "INTERMEDIATE",
    color: "from-purple-500 to-indigo-500",
    projects: [
      { name: "Multi-Tool Agent", items: ["Web search", "Save to DB", "Send email"] },
      { name: "RAG Assistant", items: ["Upload documents", "Vector store", "Contextual answers"] }
    ]
  },
  {
    title: "ADVANCED",
    color: "from-orange-500 to-red-500",
    projects: [
      { name: "Autonomous Business Agent", items: ["Multi-step reasoning", "Task planning", "Execution logs"] },
      { name: "Multi-Agent System", items: ["Separate Agents", "Communication Layer", "Task Delegation"] }
    ]
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none">
              K
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KRISTINA</h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500 dark:text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5"><HiOutlineAcademicCap className="w-4 h-4" /> NXAB100158</span>
                <span className="flex items-center gap-1.5"><HiOutlineMail className="w-4 h-4" /> kristins97@gmail.com</span>
                <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-800/50">Agentic AI Developer</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">NexaAgent Internship</p>
            <p className="text-sm font-medium text-gray-600 dark:text-zinc-300">Main Dashboard</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        
        {/* Task Details Overview */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Internship Task Overview</h2>
            <div className="h-px flex-1 bg-gray-300 dark:bg-zinc-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {taskDetails.map((detail, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-white rounded-3xl border border-gray-200 p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-zinc-900 dark:border-zinc-800">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${detail.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                <h3 className={`text-base font-black tracking-[0.2em] mb-6 flex items-center gap-2`}>
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${detail.color}`}></span>
                  {detail.title}
                </h3>
                <div className="space-y-6">
                  {detail.projects.map((p, pIdx) => (
                    <div key={pIdx}>
                      <h4 className="font-bold text-gray-800 dark:text-zinc-200 text-lg mb-3 flex items-center gap-2">
                        <span className="text-indigo-500 text-sm">0{pIdx + 1}</span> {p.name}
                      </h4>
                      <ul className="space-y-2">
                        {p.items.map((item, iIdx) => (
                          <li key={iIdx} className="text-sm text-gray-600 dark:text-zinc-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-zinc-600 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Individual Project Cards */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Project Showcases</h2>
            <div className="h-px flex-1 bg-gray-300 dark:bg-zinc-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-3xl border-2 border-gray-200 overflow-hidden transition-all hover:shadow-2xl hover:border-indigo-400 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-indigo-500 group">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-2xl dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      {project.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider ${
                      project.level === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      project.level === 'Intermediate' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {project.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t-2 border-gray-200 grid grid-cols-3 gap-2 dark:bg-zinc-800/50 dark:border-zinc-700">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all text-gray-700 dark:text-zinc-300 dark:hover:bg-zinc-700 text-center"
                  >
                    <FaVideo className="text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-tight">Demo</span>
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all text-gray-700 dark:text-zinc-300 dark:hover:bg-zinc-700 text-center"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-tight">Live</span>
                  </a>
                  <a 
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-xl hover:bg-white hover:shadow-md transition-all text-gray-700 dark:text-zinc-300 dark:hover:bg-zinc-700 text-center"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-[11px] font-bold uppercase tracking-tight">Repo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-20 bg-white border-t border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="flex items-center gap-2 text-gray-600 dark:text-zinc-400 font-medium">
                Created with <span className="text-red-500 animate-pulse">❤️</span> by 
                <span className="text-gray-900 dark:text-white font-bold underline decoration-indigo-500 underline-offset-4 decoration-2">Kristina</span>
              </p>
              <p className="text-xs text-gray-400 dark:text-zinc-500 mt-2 font-medium tracking-wide">Agentic AI Developer Portfolio</p>
            </div>
            
            <div className="flex gap-4">
              <a href="mailto:kristins97@gmail.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all dark:bg-zinc-800 dark:text-zinc-400">
                <FaEnvelope />
              </a>
              <a href="" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all dark:bg-zinc-800 dark:text-zinc-400">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all dark:bg-zinc-800 dark:text-zinc-400">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-zinc-800 flex justify-center">
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase italic">© 2026 KRISTINA. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
