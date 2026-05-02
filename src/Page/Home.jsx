import {
  Award,
  Code2,
  Coffee,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 md:w-4 md:h-4" />,
    link: "https://www.linkedin.com/",
    gradient: "from-[#0A66C2] to-[#004182]",
    shadow: "shadow-blue-500/20",
  },
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6 md:w-4 md:h-4" />,
    link: "https://github.com/",
    gradient: "from-[#24292F] to-[#040d16]",
    shadow: "shadow-slate-900/30",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6 md:w-4 md:h-4" />,
    link: "https://www.instagram.com/",
    gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
    shadow: "shadow-orange-500/20",
  },
  {
    name: "LeetCode",
    icon: <Code2 className="w-6 h-6 md:w-4 md:h-4" />,
    link: "https://leetcode.com/",
    gradient: "from-[#FFA116] to-[#C27600]",
    shadow: "shadow-yellow-600/20",
  },
];

const stats = [
  {
    icon: <Award className="w-4 h-4" />,
    label: "Experience",
    value: "0.5 Years",
  },
  {
    icon: <Coffee className="w-4 h-4" />,
    label: "Projects",
    value: "10+ Done",
  },
  { icon: <Code2 className="w-4 h-4" />, label: "Stack", value: "8+ Techs" },
];

export default function Home() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#fafafa] flex items-center justify-center py-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="relative z-10 w-full  mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Visual Section: Image & Parallax Cards */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
            <div className="relative group">
              {/* Decorative Rings */}
              <div className="absolute -inset-6 border-2 border-dashed border-slate-200 rounded-[2.5rem] animate-spin-slower opacity-50" />

              {/* Main Image Container */}
              <div className="relative z-20 w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <img
                  src="https://png.pngtree.com/png-clipart/20250127/original/pngtree-stylish-digital-art-of-boy-using-laptop-on-comfortable-seat-png-image_20052703.png"
                  alt="Rohit Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -left-10 top-10 z-30 hidden md:block animate-float">
                <div className="backdrop-blur-xl bg-white/80 p-4 rounded-2xl shadow-xl border border-white/50 space-y-3">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">
                          {stat.label}
                        </p>
                        <p className="text-sm font-black text-slate-800">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badge */}
              <div className="absolute -bottom-6 -right-6 z-30 animate-bounce-subtle">
                <div className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Available for Hire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase border border-slate-200">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Frontend & Backend Architect
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Designing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-500 to-indigo-600 animate-gradient-x">
                  Digital Future.
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-serif italic text-slate-500">
                Hi, I'm Rohit Kumar Patel
              </h2>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build high-performance, beautiful web applications. From
              pixel-perfect frontends to robust backend architectures, I turn
              complex ideas into seamless digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="text-slate-600 font-medium tracking-tight">
                Noida, Uttar Pradesh, India
              </span>
            </div>

            {/* Social Link Cloud */}
            <div className="grid grid-cols-4 gap-2">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className={`group flex items-center justify-center  gap-2  py-2.5 rounded-xl bg-gradient-to-r ${social.gradient} text-white font-bold text-sm shadow-lg ${social.shadow} transition-all duration-300 hover:-translate-y-1 hover:scale-105`}
                >
                  {social.icon}
                  <span className="hidden sm:block">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slower { animation: spin-slower 20s linear infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 4s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 15s ease infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}
