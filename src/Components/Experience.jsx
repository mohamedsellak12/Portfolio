import { useTranslation } from "react-i18next";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t("experience.experiences", { returnObjects: true });
  const labels = t("experience.labels", { returnObjects: true });

  return (
    <section id="experience" className="max-w-6xl mx-auto mb-32 px-6">

      {/* 🔥 Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t("experience.title")}
        </span>
      </h2>

      {/* 🔹 Timeline */}
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-12">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* 🔵 Dot */}
            <span className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-md">
              <FaBriefcase size={12} />
            </span>

            {/* 📦 Card */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-4">

              {/* Header */}
              <div>
                <h3 className="font-semibold text-lg md:text-xl">
                  {exp.role} –{" "}
                  <span className="text-blue-500">{exp.company}</span>
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>

              {/* 🔥 STAR Content */}
              <div className="grid gap-3 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-purple-500">{labels.situation} :</span>{" "}
                  {exp.star.situation}
                </p>
                <p>
                  <span className="font-semibold text-blue-500">{labels.task} :</span>{" "}
                  {exp.star.task}
                </p>
                <p>
                  <span className="font-semibold text-pink-500">{labels.action} :</span>{" "}
                  {exp.star.action}
                </p>
                <p>
                  <span className="font-semibold text-green-500">{labels.result} :</span>{" "}
                  {exp.star.result}
                </p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}