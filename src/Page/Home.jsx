import { Code2, Github, Instagram, Linkedin, MapPin } from "lucide-react";

function Home() {
  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      link: "https://www.instagram.com/",
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:shadow-indigo-400/50",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/",
      color: "from-indigo-500 to-indigo-700",
      hoverColor: "hover:shadow-indigo-500/50",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/",
      color: "from-indigo-700 to-indigo-900",
      hoverColor: "hover:shadow-indigo-700/50",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-5 h-5" />,
      link: "https://leetcode.com/",
      color: "from-indigo-400 to-indigo-600",
      hoverColor: "hover:shadow-indigo-500/50",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg"
    >
      {/* Image Section */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://png.pngtree.com/png-clipart/20250127/original/pngtree-stylish-digital-art-of-boy-using-laptop-on-comfortable-seat-png-image_20052703.png"
          alt="Rohit working on laptop"
          className="h-64 w-64 md:h-80 md:w-80 rounded-xl shadow-xl border border-indigo-100 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text and Social Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800">
          Hi, I’m <span className="text-indigo-600">Rohit Kumar Patel</span>
        </h1>
        <h4 className="text-lg md:text-xl font-medium text-indigo-700">
          Full Stack Developer | Innovator
        </h4>
        <p className="flex items-center justify-center md:justify-start text-gray-700 gap-2">
          <MapPin className="w-5 h-5 text-indigo-600" />
          Varanasi, Uttar Pradesh, India
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-3">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${item.hoverColor}`}
            >
              <span className="relative z-10">{item.icon}</span>
              <span className="relative z-10 text-sm">{item.name}</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
