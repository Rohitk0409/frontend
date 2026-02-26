import { BookOpen, Calendar, MapPin } from "lucide-react";

function Education() {
  const Educations = [
    {
      college: "Dr. Bhim Rao Ambedkar University, Agra",
      degree: "Bachelor of Engineering - BE",
      specialization: "Computer Science",
      duration: "Nov 2021 - Aug 2025",
      grade: "7.64 CGPA",
      location: "Agra, Uttar Pradesh, India",
      type: "Undergraduate",
    },
    {
      college: "Arjun Prasad Intermediate College, Varanasi",
      degree: "12th (Intermediate)",
      specialization: "Science Stream",
      duration: "2020 - 2021",
      grade: "81%",
      location: "Varanasi, Uttar Pradesh, India",
      type: "Senior Secondary",
    },
    {
      college: "Arjun Prasad Intermediate College, Varanasi",
      degree: "10th (High School)",
      specialization: "General Studies",
      duration: "2018 - 2019",
      grade: "73%",
      location: "Varanasi, Uttar Pradesh, India",
      type: "Secondary",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 text-center mb-10">
          Education
        </h1>

        {/* Education Cards */}
        <div className="space-y-8">
          {Educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Left Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
                  {edu.college}
                </h2>
                <h3 className="text-lg text-gray-700 font-medium">
                  {edu.degree}
                  {edu.specialization ? `, ${edu.specialization}` : ""}
                </h3>

                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    {edu.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    {edu.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    Grade: {edu.grade}
                  </p>
                </div>
              </div>

              {/* Right Accent */}
              <div className="hidden md:block">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                  {edu.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
