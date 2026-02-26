import { Briefcase, Calendar, MapPin } from "lucide-react";

function Experience() {
  const experiences = [
    {
      company: "Ezkar Private Limited",
      role: "Software Developer",
      type: "Full-time",
      duration: "Sep 2025 - Present · 2 mos",
      location: "Varanasi, Uttar Pradesh, India (On-site)",
    },
    {
      company: "Freelance (Self Employed)",
      role: "Freelancer Full Stack Developer",
      type: "Remote",
      duration: "Apr 2024 - Aug 2024 · 5 mos",
      location: "Remote",
    },
    {
      company: "LearnSmasher EduTech LLP",
      role: "Internship Trainee",
      type: "Internship",
      duration: "May 2023 - Jun 2023 · 2 mos",
      location: "Remote",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 text-center mb-10">
          Experience
        </h1>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((ex, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Left Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
                  {ex.role}
                </h2>
                <h3 className="text-lg text-gray-700 font-medium">
                  {ex.company}
                </h3>

                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    {ex.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    {ex.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                    {ex.type}
                  </p>
                </div>
              </div>

              {/* Right Accent */}
              <div className="hidden md:block">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                  {index === 0 ? "Current Role" : "Past Role"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
