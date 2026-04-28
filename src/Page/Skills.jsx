import { Cpu, Database, Layers, Terminal, Wrench } from "lucide-react";

const Skills = () => {
  // Centralized skills data with unique styles for each category
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      items: ["Java", "JavaScript"],
      accent: "group-hover:border-emerald-500/50",
      bg: "bg-emerald-500/5",
    },
    {
      title: "Frontend",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      items: ["React", "Tailwind CSS", "HTML5", "JavaScript", "Bootstrap"],
      accent: "group-hover:border-blue-500/50",
      bg: "bg-blue-500/5",
    },
    {
      title: "Backend",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      items: ["Node.js", "Express", "REST APIs", "JWT Auth"],
      accent: "group-hover:border-purple-500/50",
      bg: "bg-purple-500/5",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-amber-400" />,
      items: ["MongoDB", "SQL", "PostgreSQL"],
      accent: "group-hover:border-amber-500/50",
      bg: "bg-amber-500/5",
    },
    {
      title: "Tools & Dev",
      icon: <Wrench className="w-6 h-6 text-pink-400" />,
      items: ["VS Code", "Git/GitHub", "Postman", "Vercel"],
      accent: "group-hover:border-pink-500/50",
      bg: "bg-pink-500/5",
    },
    // {
    //   title: "Other",
    //   icon: <Globe className="w-6 h-6 text-cyan-400" />,
    //   items: ["System Design", "UI Design", "Agile"],
    //   accent: "group-hover:border-cyan-500/50",
    //   bg: "bg-cyan-500/5",
    // },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-[#030712] overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className=" mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-indigo-400 font-mono tracking-tighter text-lg md:text-xl font-semibold">
            &lt;capabilities /&gt;
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Toolkit
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my tech stack and the tools I use to
            bring digital products to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 ${category.accent} animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-2xl ${category.bg} border border-white/5 group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-white/5 rounded-xl hover:bg-indigo-500 hover:text-white hover:border-indigo-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle Decorative Background Number */}
              <span className="absolute bottom-4 right-6 text-6xl font-black text-white/[0.03] select-none pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
