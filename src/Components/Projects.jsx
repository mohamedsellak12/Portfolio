import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 mr-2 mb-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-medium tracking-wide">
      {children}
    </span>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section id="projects" data-aos="fade-up" className="max-w-6xl mx-auto mb-24 px-6">
      <h3 className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400">
        {t("projects.title")}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-2xl bg-white/80 dark:bg-gray-800/60 shadow-lg hover:shadow-2xl backdrop-blur-sm transition-all hover:-translate-y-1 overflow-hidden"
          >
            {/* Image du projet */}
            {p.image && (
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className="p-5">
              <h4 className="font-semibold text-xl mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{p.desc}</p>
              <div className="mb-3">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="flex gap-4 text-2xl">
                <a href={p.repo} target="_blank" className="hover:text-blue-600">
                  <FaGithub />
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" className="hover:text-green-500">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}