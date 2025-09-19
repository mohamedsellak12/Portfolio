import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BlogApp",
    desc: "Une plateforme sociale permettant de publier des articles, d’ajouter des commentaires et d’exprimer des réactions (likes).",
    tech: ["Angular", "Tailwind", "Express.js","mongoDB"],
    demo: "#",
    repo: "https://github.com/mohamedsellak12/BlogApp.git"
  },
  {
    title: "PrayersTimming",
    desc: "Application web affichant les horaires de prière en fonction de la localisation de l’utilisateur, avec intégration du Coran en version écrite et audio (consommation d’APIs).",
    tech: ["Angular", "API", "Tailwind"],
    demo: "#",
    repo: "https://github.com/mohamedsellak12/PrayersTimming.git"
  },
  {
    title: "TakeIt",
    desc: "Plateforme en ligne jouant le rôle d’intermédiaire entre les organisateurs d’événements et les clients, permettant la réservation et l’achat de tickets en ligne (Projet de fin d’études 2025).",
    tech: ["Angular","Tailwind", "Laravel", "Stripe", "MySQL"],
    demo: "#",
    repo: "https://github.com/mohamedsellak12/TakeIt2025.git"
  },
  {
    title: "MemoryGameApp",
    desc: "Jeu web interactif de mémoire consistant à associer des cartes, développé pour améliorer la concentration et le divertissement.",
    tech: ["Angular", "Tailwind", "TypeScript"],
    demo: "#",
    repo: "https://github.com/mohamedsellak12/MemorygameApp.git"
  },
  {
    title: "Education Land",
    desc: "Plateforme éducative dédiée à une école primaire privée pour la gestion des inscriptions, du suivi des élèves et des paiements (Projet de fin d’études 2024).",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    demo: "#",
    repo: "https://github.com/mohamedsellak12/MYPFE.git"
  }
];

function Badge({ children }) {
  return <span className="inline-block px-2 py-1 mr-2 mb-2 rounded-full bg-gray-200 text-gray-800 text-xs">{children}</span>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Mohamed Sellak</h1>
          <nav className="space-x-4">
            <a href="#projects" className="hover:underline">Projets</a>
            <a href="#skills" className="hover:underline">Compétences</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between my-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">Salut, je suis Mohamed Sellak 👋</h2>
            <p className="mb-4">Je développe des applications web modernes et performantes avec React et Laravel.</p>
            <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded">Voir mes projets</a>
          </div>
          <div className="mt-6 md:mt-0 w-1/3">
            <img src="/profile.JPG" alt="avatar" className="rounded-full  border-4 border-gray-300"/>
          </div>
        </section>

        {/* Compétences */}
        <section id="skills" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Compétences</h3>
          <div className="flex flex-wrap gap-2">
  {[
    // Frontend
    "React", "Angular", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript",

    // Backend
    "Laravel", "Node.js", "Express.js", "Django", "Spring Boot",

    // Bases de données
    "MySQL", "SQLite", "MongoDB",

    // Outils & DevOps
    "Git", "GitHub", "REST API", 

    // Méthodologies & Concepts
    "Programmation Orientée Objet (Java, PHP ,Python)",
  ].map(skill => (
    <Badge key={skill}>{skill}</Badge>
  ))}
</div>

        </section>

        {/* Projets */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Projets récents</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.title} className="border rounded shadow p-4">
                <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                <p className="mb-2 text-gray-700">{p.desc}</p>
                <div className="mb-2">
                  {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <div className="flex gap-2">
                  <a href={p.repo} className="text-3xl"> <FaGithub/> </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
      <section id="contact" className="mb-12 max-w-3xl mx-auto">
  <h3 className="text-2xl font-semibold mb-4">Contact</h3>
  <p className="mb-4">
    Vous pouvez me contacter pour des projets, collaborations ou offres d’emploi via les moyens suivants :
  </p>

  <div className="flex flex-col md:flex-row md:justify-between gap-4">
    {/* Email */}
    <div className="flex items-center gap-2 bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition">
      <span className="text-lg font-semibold">Email:</span>
      <a href="mailto:mohamedsellak597@example.com" className="text-blue-600 hover:underline">
        mohamedsellak597@example.com
      </a>
    </div>

    {/* Téléphone */}
    <div className="flex items-center gap-2 bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition">
      <span className="text-lg font-semibold">Téléphone:</span>
      <a href="tel:+212681226124" className="text-blue-600 hover:underline">
        +212 6 81 22 61 24
      </a>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center gap-2 bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition">
      <span className="text-lg font-semibold">LinkedIn:</span>
      <a href="https://www.linkedin.com/in/mohamed-sellak-703b142a3/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
        Profil LinkedIn
      </a>
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
