import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  // Centralized data for easy maintenance
  const educationData = [
    {
      college: "Dr. Bhim Rao Ambedkar University, Agra",
      degree: "Bachelor of Engineering - BE",
      specialization: "Computer Science",
      duration: "Nov 2021 - Aug 2025",
      grade: "7.64 CGPA",
      location: "Agra, Uttar Pradesh, India",
      type: "Undergraduate",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      college: "Arjun Prasad Intermediate College, Varanasi",
      degree: "12th (Intermediate)",
      specialization: "Science Stream",
      duration: "2020 - 2021",
      grade: "81%",
      location: "Varanasi, Uttar Pradesh, India",
      type: "Senior Secondary",
      accent: "from-purple-500 to-indigo-500",
    },
    {
      college: "Arjun Prasad Intermediate College, Varanasi",
      degree: "10th (High School)",
      specialization: "General Studies",
      duration: "2018 - 2019",
      grade: "73%",
      location: "Varanasi, Uttar Pradesh, India",
      type: "Secondary",
      accent: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-12 bg-[#030712] overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className=" mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-indigo-400 font-mono tracking-widest uppercase text-sm animate-pulse">
            My Academic Journey
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Education<span className="text-indigo-500">.</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0f172a] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20 group-hover:border-indigo-400 transition-colors duration-300">
                <GraduationCap
                  size={18}
                  className="group-hover:text-indigo-400"
                />
              </div>

              {/* Education Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col gap-4">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${edu.accent} shadow-lg`}
                    >
                      {edu.type}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                      <Award size={16} />
                      {edu.grade}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {edu.college}
                    </h2>
                    <h3 className="text-indigo-400 font-medium mt-1">
                      {edu.degree} <span className="text-slate-500">|</span>{" "}
                      {edu.specialization}
                    </h3>
                  </div>

                  {/* Metadata Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar size={14} className="text-indigo-500" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={14} className="text-indigo-500" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
