import { Building2, Calendar, ChevronRight, MapPin } from "lucide-react";

const Experience = () => {
  // Data object to keep JSX clean
  const experiences = [
    {
      company: "Ezkar Private Limited",
      role: "Software Developer",
      type: "Full-time",
      duration: "Sep 2025 - Feb 2026",
      location: "Varanasi, India (On-site)",
      description:
        "Leading development of scalable web solutions and optimizing administrative system modules.",
      accent: "from-blue-600 to-indigo-600",
      current: false,
    },
    {
      company: "Freelance (Self Employed)",
      role: "Full Stack Developer",
      type: "Remote",
      duration: "Apr 2024 - Aug 2024",
      location: "Remote",
      description:
        "Delivered high-quality React and Tailwind applications for diverse international clients.",
      accent: "from-purple-600 to-pink-600",
      current: false,
    },
    {
      company: "LearnSmasher EduTech LLP",
      role: "Internship Trainee",
      type: "Internship",
      duration: "May 2023 - Jun 2023",
      location: "Remote",
      description:
        "Gained hands-on experience in frontend technologies and professional workflow management.",
      accent: "from-emerald-600 to-teal-600",
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-12 bg-[#030712] overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-indigo-400 font-mono tracking-widest uppercase text-sm">
              Professional Path
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white">
              Experience<span className="text-indigo-500">.</span>
            </h1>
          </div>
          <p className="text-slate-400 max-w-md md:text-right">
            Building digital excellence through diverse roles, from corporate
            development to freelance innovation.
          </p>
        </div>

        {/* Experience Grid/List */}
        <div className="grid gap-6">
          {experiences.map((ex, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl p-px transition-all duration-500 hover:scale-[1.01] animate-fadeInUp`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Border Glow Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${ex.accent} opacity-20 group-hover:opacity-100 transition-opacity`}
              ></div>

              {/* Main Content */}
              <div className="relative bg-[#0f172a] rounded-[calc(1.5rem-1px)] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Role & Company Icon Section */}
                <div className="flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-white">
                  <Building2
                    size={32}
                    className="group-hover:text-indigo-400 transition-colors"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                        {ex.role}
                      </h2>
                      <div className="flex items-center gap-2 text-indigo-400 font-semibold mt-1">
                        <span>{ex.company}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                        <span className="text-slate-400 text-sm font-normal">
                          {ex.type}
                        </span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {ex.current && (
                      <span className="self-start md:self-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
                    {ex.description}
                  </p>

                  {/* Metadata Icons */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-white/5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-indigo-500" />
                      {ex.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-indigo-500" />
                      {ex.location}
                    </div>
                  </div>
                </div>

                {/* Subtle Arrow */}
                <div className="hidden md:flex items-center text-slate-700 group-hover:text-indigo-500 transition-colors">
                  <ChevronRight size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
