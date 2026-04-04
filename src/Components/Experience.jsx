import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
 const experiences = [
  {
    role: "Stagiaire Développeur",
    company: "Afridata Services, Casablanca",
    period: "01/11/2025 - 31/01/2026 (3 mois)",
    desc: "Stage au sein de l'entreprise Afridata Services à Casablanca, participation au développement et à la maintenance des applications web."
  },
  {
    role: "Stagiaire PFE",
    company: "CotStyles, Casablanca",
    period: "01/04/2024 - 30/04/2024 (1 mois)",
    desc: "Stage de fin d'études chez CotStyles, développement d'un projet académique ou d'une application web spécifique."
  }
];

  return (
    <section id="experience" className="max-w-6xl mx-auto mb-20 px-6">

      {/* 🔥 Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      {/* 🔹 Timeline */}
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-10">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* 🔵 Dot */}
            <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md">
              <FaBriefcase size={12} />
            </span>

            {/* 📦 Card */}
            <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg p-5 rounded-xl shadow-md hover:shadow-xl transition">
              
              <h3 className="font-semibold text-lg">
                {exp.role} – <span className="text-blue-500">{exp.company}</span>
              </h3>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </span>

              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}