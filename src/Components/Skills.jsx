import { useState } from "react";

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "React", level: 90, type: "Front-end" },
    { name: "Angular", level: 80, type: "Front-end" },
    { name: "Tailwind CSS", level: 85, type: "Front-end" },
    { name: "Bootstrap", level: 75, type: "Front-end" },
    { name: "JavaScript", level: 95, type: "Front-end" },
    { name: "TypeScript", level: 85, type: "Front-end" },
    { name: "Laravel", level: 90, type: "Back-end" },
    { name: "Node.js", level: 80, type: "Back-end" },
    { name: "Express.js", level: 85, type: "Back-end" },
    { name: "Django", level: 65, type: "Back-end" },
    { name: "MySQL", level: 85, type: "Database" },
    { name: "MongoDB", level: 80, type: "Database" },
    { name: "Git", level: 90, type: "Tools" },
    { name: "REST API", level: 85, type: "Tools" },
    { name: "VS code", level: 95, type: "Tools" },
  ];

  const types = ["All", "Front-end", "Back-end", "Database", "Tools"];

  const filteredSkills = filter === "All" ? skills : skills.filter(s => s.type === filter);

  return (
    <section id="skills" data-aos="zoom-in" className="max-w-6xl mx-auto mb-20 px-6">
      <h3 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        Compétences
      </h3>

      {/* Filtres */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === type
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Compétences */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map(skill => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
              <span className="font-medium text-gray-500 dark:text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
