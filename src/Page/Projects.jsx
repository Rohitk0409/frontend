function Projects() {
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
      details: [
        "Designed and developed a full-stack Employee Management System to manage employee records, roles, and organizational data.",
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
      details: [
        "Designed and developed a production-ready ATS Resume Checker allowing users to upload resumes and match against job descriptions.",
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
      details: [
        "A web-based note-making platform providing users with secure, cloud-synced note management features.",
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
      details: [
        "Built a responsive single-page news application using React Router and Bootstrap for smooth category navigation.",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-indigo-50 py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-10 text-center">
        🚀 Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 object-cover"
            />

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 mb-3">{project.duration}</p>

              <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/*action Buttons */}
              <div className="mt-auto flex gap-3">
                {project?.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                      project.github
                        ? "bg-gray-800 hover:bg-gray-900"
                        : "bg-gray-400 pointer-events-none cursor-not-allowed "
                    }`}
                  >
                    GitHub
                  </a>
                ) : (
                  <>
                    {" "}
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                        project.frontend
                          ? "bg-gray-800 hover:bg-gray-900"
                          : "bg-gray-400 pointer-events-none cursor-not-allowed "
                      }`}
                    >
                      Frontend
                    </a>
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                        project.backend
                          ? "bg-green-800 hover:bg-green-900"
                          : "bg-gray-400 pointer-events-none cursor-not-allowed "
                      }`}
                    >
                      Backend
                    </a>
                  </>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` text-sm font-medium px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors ${
                    project.live
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-200 text-white pointer-events-none cursor-not-allowed"
                  }`}
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
