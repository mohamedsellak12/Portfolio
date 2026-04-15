import { useState } from "react";
import {
  SiReact, SiAngular, SiTailwindcss, SiBootstrap,
  SiJavascript, SiTypescript, SiLaravel, SiNodedotjs,
  SiExpress, SiDjango, SiMysql, SiMongodb,
  SiGit,
  SiSpringboot,
  SiSpring,
  SiFlask,
  SiSymfony,
  SiPostgresql,
  SiVuedotjs
} from "react-icons/si";


import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const skills = [
  { name: "React", level: 90, type: "frontend", icon: SiReact, color: "text-cyan-400" },
  { name: "Angular", level: 80, type: "frontend", icon: SiAngular, color: "text-red-500" },
  { name: "Tailwind CSS", level: 85, type: "frontend", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bootstrap", level: 75, type: "frontend", icon: SiBootstrap, color: "text-purple-500" },
  { name: "JavaScript", level: 95, type: "frontend", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", level: 85, type: "frontend", icon: SiTypescript, color: "text-blue-500" },

  { name: "Laravel", level: 90, type: "backend", icon: SiLaravel, color: "text-red-600" },
  { name: "Node.js", level: 80, type: "backend", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", level: 85, type: "backend", icon: SiExpress, color: "text-gray-400" },
  { name: "Django", level: 65, type: "backend", icon: SiDjango, color: "text-green-700" },

  { name: "MySQL", level: 85, type: "database", icon: SiMysql, color: "text-blue-600" },
  { name: "MongoDB", level: 80, type: "database", icon: SiMongodb, color: "text-green-600" },

  { name: "Git", level: 90, type: "tools", icon: SiGit, color: "text-orange-500" },
  { name: "REST API", level: 85, type: "tools", icon: FaCode, color: "text-gray-500" },
  { name: "VS Code", level: 95, type: "tools", icon: FaCode, color: "text-blue-400" },
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
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredSkills.map((skill) => {
    const Icon = skill.icon;

    return (
      <div
        key={skill.name}
        className="p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Icon className={`text-2xl ${skill.color}`} />
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>
          </div>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        {/* Type */}
        <span className="text-xs text-gray-500 mt-2 block">
          {t(`skills.types.${skill.type}`)}
        </span>
      </div>
    );
  })}
</div>
    </section>
  );
}
