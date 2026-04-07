import { useState } from "react";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const skills = [
    { name: "React", level: 90, type: "frontend" },
    { name: "Angular", level: 80, type: "frontend" },
    { name: "Tailwind CSS", level: 85, type: "frontend" },
    { name: "Bootstrap", level: 75, type: "frontend" },
    { name: "JavaScript", level: 95, type: "frontend" },
    { name: "TypeScript", level: 85, type: "frontend" },
    { name: "Laravel", level: 90, type: "backend" },
    { name: "Node.js", level: 80, type: "backend" },
    { name: "Express.js", level: 85, type: "backend" },
    { name: "Django", level: 65, type: "backend" },
    { name: "MySQL", level: 85, type: "database" },
    { name: "MongoDB", level: 80, type: "database" },
    { name: "Git", level: 90, type: "tools" },
    { name: "REST API", level: 85, type: "tools" },
    { name: "VS Code", level: 95, type: "tools" },
  ];

  const types = ["all", "frontend", "backend", "database", "tools"];

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.type === filter);

  return (
    <section
      id="skills"
      data-aos="zoom-in"
      className="max-w-6xl mx-auto mb-20 px-6"
    >
      {/* 🔥 Title */}
      <h3 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        {t("skills.title")}
      </h3>

      {/* 🔹 Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === type
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {t(`skills.types.${type}`)}
          </button>
        ))}
      </div>

      {/* 🔹 Skills */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="font-medium text-gray-500 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t(`skills.types.${skill.type}`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
