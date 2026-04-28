import { Code, Github, Globe, Rocket, Server } from "lucide-react";

const Projects = () => {
  const allProjects = [
    {
      name: "EMS- Pro",
      image: "/EMS_Pro.png",
      description: "Employee Management System",
      github: null,
      frontend: "https://github.com/Rohitk0409/EMS_Frontend",
      backend: "https://github.com/Rohitk0409/EMS_Backend",
      live: "https://ems-frontend-dun-zeta.vercel.app/",
      duration: "Jan 2025 - Feb 2026",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      details: [
        "Designed a full-stack system to manage employee records, roles, and organizational data.",
      ],
    },
    {
      name: "Vintrixx Edge",
      image: "/vinttirxEdge.png",
      description: "Company Portfolio & Services Website",
      github: "https://github.com/Rohitk0409/inttrix_frontend",
      frontend: null,
      backend: null,
      live: "https://vinttrix-edge.vercel.app/",
      duration: "Jan 2025 - Feb 2026",
      tech: ["React", "Tailwind"],
      details: [
        "Designed and developed a modern company portfolio website for Vinttrix Edge to showcase company services, team information, and business offerings.",
      ],
    },
    {
      name: "ResumeMetric",
      image: "/resumeMetric.png",
      description: "ATS Resume Analyzer",
      github: null,
      frontend: "https://github.com/Rohitk0409/ATS_Frontend",
      backend: "https://github.com/Rohitk0409/ATS_Backend",
      live: "https://ats-frontend-ug9t.vercel.app/",
      duration: "Dec 2025 - Jan 2026",
      tech: ["OpenAI API", "React", "Express", "Vite"],
      details: [
        "Production-ready ATS Resume Checker matching resumes against job descriptions.",
      ],
    },
    {
      name: "Cloud Notes",
      image: "/cloud_notes.png",
      description: "Online Note-Making Web Application",
      github: "https://github.com/Rohitk0409/Cloud-Notes-React-",
      frontend: "",
      backend: "",
      live: null,
      duration: "Sep 2024 – Nov 2024",
      tech: ["React", "Context API", "Firebase"],
      details: [
        "Secure, cloud-synced note management platform with real-time updates.",
      ],
    },
    {
      name: "News Express",
      description: "News Web Application",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAMuT3JVKUuO5VmVV0PCjLGgqsmXlKBZ96A&s",
      github: "https://github.com/Rohitk0409/news-app",
      frontend: "",
      backend: "",
      live: null,
      duration: "May 2024 - Jun 2024",
      tech: ["React", "NewsAPI", "Bootstrap"],
      details: [
        "Responsive news application featuring category-based navigation and live fetching.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 bg-[#030712] overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className=" mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <Rocket size={14} /> Showcase
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Projects
            </span>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10 opacity-60"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white font-mono uppercase tracking-tighter">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-wide">
                    {project.description}
                  </p>
                </div>

                <ul className="text-slate-300 text-sm leading-relaxed">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-indigo-500">▹</span> {detail}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech?.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded-md border border-white/5 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-700 transition-all"
                    >
                      <Github size={16} /> Code
                    </a>
                  ) : (
                    <>
                      {project.frontend && (
                        <a
                          href={project.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-700 transition-all"
                        >
                          <Code size={16} /> Frontend
                        </a>
                      )}
                      {project.backend && (
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white text-xs font-bold rounded-xl hover:bg-slate-600 transition-all"
                        >
                          <Server size={16} /> Backend
                        </a>
                      )}
                    </>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                    >
                      <Globe size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
