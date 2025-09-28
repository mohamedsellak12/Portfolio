import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { FaGithub, FaMoon, FaGlobe , FaSun } from "react-icons/fa";
import Navbar from "./Components/Navbar";
// import { BiRadioCircleMarked } from "react-icons/bi";

const projects = [
  {
    title:"Movies land",
    desc:"Movies Land est une application web développée avec Next.js qui permet d’explorer, rechercher et découvrir des films et séries via l’API TMDB.",
    tech:["next.js","TailwindCSS","Swiper.js","API","TypeScript"],
    demo:"https://movies-land-amber.vercel.app/",
    repo:"https://github.com/mohamedsellak12/Movies-Land.git"
  },
  {
    title:"Weather-app",
    desc:"Une application web fullstack (React + Node/Express) qui affiche la météo en temps réel d’une ville via une API externe.",
    tech:["React","TailwindCSS","Nodejs","API"],
    demo: "https://weather-app-sigma-rust.vercel.app/",
    repo: "https://github.com/mohamedsellak12/weather-app.git"
  },
  {
    title: "BlogApp",
    desc: "Une plateforme sociale permettant de publier des articles, d’ajouter des commentaires et d’exprimer des réactions (likes).",
    tech: ["Angular", "TailwindCSS", "Express.js","MongoDB","TypeScript"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/BlogApp.git"
  },
  {
    title: "PrayersTimming",
    desc: "Application web affichant les horaires de prière en fonction de la localisation de l’utilisateur, avec intégration du Coran en version écrite et audio (consommation d’APIs).",
    tech: ["Angular", "API", "TailwindCSS","TypeScript"],
    demo: "https://prayers-timming.vercel.app/",
    repo: "https://github.com/mohamedsellak12/PrayersTimming.git"
  },
  {
    title: "TakeIt",
    desc: "Plateforme en ligne jouant le rôle d’intermédiaire entre les organisateurs d’événements et les clients, permettant la réservation et l’achat de tickets en ligne (Projet de fin d’études 2025).",
    tech: ["Angular","TailwindCSS", "Laravel", "Stripe", "MySQL"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/TakeIt2025.git"
  },
  {
    title: "MemoryGameApp",
    desc: "Jeu web interactif de mémoire consistant à associer des cartes, développé pour améliorer la concentration et le divertissement.",
    tech: ["Angular", "TailwindCSS", "TypeScript"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/MemorygameApp.git"
  },
  {
    title: "Education Land",
    desc: "Plateforme éducative dédiée à une école primaire privée pour la gestion des inscriptions, du suivi des élèves et des paiements (Projet de fin d’études 2024).",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/MYPFE.git"
  }
];

function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 mr-2 mb-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs">
      {children}
    </span>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <button
            data-aos="fade-up"
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-16 right-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 z-50 shadow-lg"
        >
                {darkMode ? <FaSun className="text-yellow-400"/> : <FaMoon className="text-gray-900"/>}
        </button>

      {/* Navbar */}
      <Navbar/>
      <main className="max-w-5xl mx-auto p-6">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between my-12">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-3">Salut, je suis Mohamed Sellak 👋</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Je développe des applications web modernes et performantes avec React et Laravel.
            </p>
            <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded">Voir mes projets</a>
          </div>
          <div data-aos="fade-left" className="mt-6 md:mt-0 w-1/3">
            <img src="/profile.JPG" alt="avatar" className="rounded-full border-4 border-gray-300 dark:border-gray-600"/>
          </div>
        </section>

        {/* Compétences */}
        <section id="skills" data-aos="zoom-in" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React", "Angular", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript",
              "Laravel", "Node.js", "Express.js", "Django",
              "MySQL", "SQLite", "MongoDB",
              "Git", "GitHub", "REST API",
              "Programmation Orientée Objet (Java, PHP ,Python)",
            ].map(skill => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>

        {/* Projets */}
        <section id="projects" data-aos="fade-right" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Projets récents</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.title} className="border rounded shadow p-4 bg-white dark:bg-gray-800" data-aos="fade-up">
                <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                <p className="mb-2 text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mb-2">
                  {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <div className="flex gap-2  dark:hover:text-gray-300">
                  <a href={p.repo} target="-" className=" hover:text-gray-600 text-3xl"> <FaGithub/> </a>
                 { p.demo? <a href={p.demo} target="-" className="hover:text-gray-600 text-3xl"> <FaGlobe   /> </a>:""}
                </div>
               
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-aos="fade-up" className="mb-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Vous pouvez me contacter pour des projets, collaborations ou offres d’emploi via les moyens suivants :
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            {/* Email */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <span className="text-lg font-semibold">Email:</span>
              <a href="mailto:mohamedsellak597@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                mohamedsellak597@example.com
              </a>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <span className="text-lg font-semibold">Téléphone:</span>
              <a href="tel:+212681226124" className="text-blue-600 dark:text-blue-400 hover:underline">
                +212 6 81 22 61 24
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-4 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <span className="text-lg font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/mohamed-sellak-703b142a3/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:underline">
                Profil LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 transition-colors duration-300">
        <Footer/>
      </footer>

    </div>
  );
}
