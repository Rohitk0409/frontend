import { Code2, Cpu, Database, Layers, ToolCase } from "lucide-react";

function Skills() {
  const skills = {
    language: ["Java", "JavaScript", "C"],
    frontend: ["HTML", "Tailwind CSS", "JavaScript", "React", "Bootstrap"],
    backend: ["Node.js", "Express", "npm", "JWT"],
    database: ["MongoDB", "SQL"],
    tools: ["VS Code", "Git", "Postman"],
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 text-center mb-10">
          Skills
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <SkillCard
            title="Languages"
            icon={<Code2 className="w-6 h-6 text-indigo-600" />}
            items={skills.language}
          />

          {/* Frontend */}
          <SkillCard
            title="Frontend"
            icon={<Layers className="w-6 h-6 text-indigo-600" />}
            items={skills.frontend}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            icon={<Cpu className="w-6 h-6 text-indigo-600" />}
            items={skills.backend}
          />

          {/* Database */}
          <SkillCard
            title="Database"
            icon={<Database className="w-6 h-6 text-indigo-600" />}
            items={skills.database}
          />

          {/* Tools */}
          <SkillCard
            title="Tools"
            icon={<ToolCase className="w-6 h-6 text-indigo-600" />}
            items={skills.tools}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-indigo-100 hover:border-indigo-300 transition-all duration-300 p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-indigo-700">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-4 py-1.5 text-sm bg-indigo-100 text-indigo-700 font-medium rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
