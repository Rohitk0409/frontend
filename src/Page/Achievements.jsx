import { CheckCircle, Medal, Star, Target, Trophy } from "lucide-react";

const Achievements = () => {
  const achievementsData = [
    {
      text: "Solved 250+ DSA problems on LeetCode and GeeksforGeeks, enhancing algorithmic thinking.",
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      tag: "Problem Solving",
    },
    {
      text: "Completed the 100 Days Coding Challenge on LeetCode, demonstrating consistency and dedication.",
      icon: <Medal className="w-6 h-6 text-amber-400" />,
      tag: "Consistency",
    },
    {
      text: "Earned a Git & GitHub certification from Physics Wallah, gaining hands-on version control experience.",
      icon: <Star className="w-6 h-6 text-blue-400" />,
      tag: "Certification",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 md:px-16 bg-[#030712] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div className=" mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Trophy size={14} /> Milestone
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Achievements
            </span>
          </h1>
          <p className="text-slate-400">
            A testament to my dedication, continuous learning, and technical
            growth.
          </p>
        </div>

        {/* Achievement List */}
        <div className="grid gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center p-1 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 w-full">
                {/* Icon Circle */}
                <div className="shrink-0 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-grow space-y-2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/80">
                      {item.tag}
                    </span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></span>
                    <h3 className="text-white font-semibold text-lg flex items-center justify-center md:justify-start gap-2">
                      Achievement Unlocked
                      <CheckCircle size={16} className="text-emerald-500" />
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
