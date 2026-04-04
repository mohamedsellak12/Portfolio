import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full absolute top-0 left-0"></div>
        <div className="w-[400px] h-[400px] bg-pink-400/30 blur-[120px] rounded-full absolute bottom-0 right-0"></div>
      </div>

      {/* 🔹 Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-2/3 space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-gray-800 dark:text-white">
            Hi, I'm
          </span>

          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mohamed Sellak
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          Full Stack Developer specialized in{" "}
          <span className="font-semibold text-blue-500">React</span> &{" "}
          <span className="font-semibold text-purple-500">Laravel</span>.  
          I build modern, scalable and high-performance web applications.
        </p>

        {/* 🔥 CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-all"
          >
            🚀 View Projects
          </a>

          <a
            href="/CV.pdf"
            download
            className="px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            📄 Download CV
          </a>

        </div>
      </motion.div>

      {/* 🔹 Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 md:mt-0 relative w-52 md:w-72"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-40 blur-3xl"></div>

        <img
          src="/profile.JPG"
          alt="Mohamed Sellak"
          className="relative w-full rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-md hover:scale-105 transition"
        />
      </motion.div>
    </section>
  );
}