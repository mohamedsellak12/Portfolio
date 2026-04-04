import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 mb-32 overflow-hidden">

      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h2>

      {/* 🔹 Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* 🧠 Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-center md:text-left"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Je suis <span className="font-semibold text-blue-500">Mohamed Sellak</span>, 
            développeur Full Stack passionné par la création d'applications web modernes.
            J’aime transformer des idées en solutions digitales performantes.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Spécialisé en <span className="text-purple-500 font-semibold">React</span> et{" "}
            <span className="text-pink-500 font-semibold">Laravel</span>, 
            je développe des interfaces fluides et des backends robustes.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Mon objectif est de créer des expériences utilisateur intuitives, rapides 
            et adaptées aux besoins réels.
          </p>
        </motion.div>

        {/* 🚀 Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6"
        >

          {/* Card 1 */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-xl transition">
            <FaCode className="text-3xl text-blue-500" />
            <div>
              <h4 className="font-semibold">Clean Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Code structuré, maintenable et scalable
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-xl transition">
            <FaLaptopCode className="text-3xl text-purple-500" />
            <div>
              <h4 className="font-semibold">Modern UI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interfaces modernes avec React & Tailwind
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg shadow-md hover:shadow-xl transition">
            <FaRocket className="text-3xl text-pink-500" />
            <div>
              <h4 className="font-semibold">Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Applications rapides et optimisées
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}