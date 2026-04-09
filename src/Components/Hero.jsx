import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 pt-28 mb-24"
      data-aos="fade-up"
    >
      {/* 🔹 Avatar */}
      <div className=" md:mt-0 relative w-48 md:w-64 mx-auto">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-40 blur-3xl"></div>

        <img
          src="/profile.JPG"
          alt="avatar"
          className="w-full rounded-full border-4 border-blue-500/40 shadow-2xl hover:scale-105 transition-transform"
        />
      </div>

      <div className="md:w-2/3 space-y-4">

        {/* 🔥 Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t("hero.title")} <span className="text-white">👋</span>
        </h1>

        {/* 🔹 Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {t("hero.desc")}
        </p>

        {/* 🔹 Button */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
          >
            <FaDownload />
            {t("hero.cv")}
          </a>
        </div>
      </div>

      
    </section>
  );
}