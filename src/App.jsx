import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { FaGithub, FaMoon, FaGlobe, FaSun, FaDownload } from "react-icons/fa";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import ContactForm from "./Components/ContactForm";
import About from "./Components/About";
import Experience from "./Components/Experience";

const projects = [
   {
     title: "Tic tac toe",
     desc:"Jeu Tic Tac Toe développé en React avec Vite et Tailwind CSS, incluant un mode joueur vs joueur et joueur vs robot.",
     tech:["React","TailwindCSS","JavaScript" ],
     demo:"https://tic-tac-toe-pi-one-81.vercel.app/",
     repo:"https://github.com/mohamedsellak12/tic-tac-toe.git",
     image:"/projects/tictactoe.png"
  },
  {
     title: "OnTalk",
     desc:"OnTalk est une application de chat instantané simple et moderne pour communiquer et partager en temps réel.",
     tech:["React","TailwindCSS","Nodejs","JavaScript","MongoDB" ],
     demo:null,
     repo:"https://github.com/mohamedsellak12/ChatApp-Front.git",
     image:"/projects/OnTalk.png"
  }
  ,
  {
    title: "Translate App",
    desc: "Une application Next.js moderne permettant de traduire automatiquement du texte entre plusieurs langues grâce à l’API MyMemory.",
    tech: ["Next.js", "TailwindCSS", "API", "TypeScript"],
    demo: "https://translate-app-pi-nine.vercel.app/",
    repo: "https://github.com/mohamedsellak12/Translate-App.git",
    image:"/projects/translate.png"

  },
  {
    title: "Movies Land",
    desc: "Movies Land est une application web qui permet d’explorer et découvrir des films et séries via l’API TMDB.",
    tech: ["Next.js", "TailwindCSS", "Swiper.js", "API", "TypeScript"],
    demo: "https://movies-land-amber.vercel.app/",
    repo: "https://github.com/mohamedsellak12/Movies-Land.git",
    image:"/projects/movies.png"

  },
   {
    title:"Weather-app",
    desc:"Une application web fullstack (React + Node/Express) qui affiche la météo en temps réel d’une ville via une API externe.",
    tech:["React","TailwindCSS","Nodejs","API"],
    demo: "https://weather-app-sigma-rust.vercel.app/",
    repo: "https://github.com/mohamedsellak12/weather-app.git",
    image:"/projects/weather.png"

  },
  {
    title: "BlogApp",
    desc: "Une plateforme sociale permettant de publier des articles, d’ajouter des commentaires et d’exprimer des réactions (likes).",
    tech: ["Angular", "TailwindCSS", "Express.js","MongoDB","TypeScript"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/BlogApp.git",
    image:"/projects/blogapp.png"
  },
  {
    title: "Nour Islam",
    desc: "Application web affichant les horaires de prière en fonction de la localisation de l’utilisateur, avec intégration du Coran en version écrite et audio (consommation d’APIs).",
    tech: ["Angular", "API", "TailwindCSS","TypeScript"],
    demo: "https://nour-islam.vercel.app/",
    repo: "https://github.com/mohamedsellak12/PrayersTimming.git",
    image:"/projects/nour.png"

  },
  {
    title: "TakeIt",
    desc: "Plateforme en ligne jouant le rôle d’intermédiaire entre les organisateurs d’événements et les clients, permettant la réservation et l’achat de tickets en ligne (Projet de fin d’études 2025).",
    tech: ["Angular","TailwindCSS", "Laravel", "Stripe", "MySQL"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/TakeIt2025.git",
    image:"/projects/takeit.png"

  },
  {
    title: "MemoryGameApp",
    desc: "Jeu web interactif de mémoire consistant à associer des cartes, développé pour améliorer la concentration et le divertissement.",
    tech: ["Angular", "TailwindCSS", "TypeScript"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/MemorygameApp.git",
    image:"/projects/memory.png"

  },
  {
    title: "Education Land",
    desc: "Plateforme éducative dédiée à une école primaire privée pour la gestion des inscriptions, du suivi des élèves et des paiements (Projet de fin d’études 2024).",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    demo: null,
    repo: "https://github.com/mohamedsellak12/MYPFE.git",
    image:"/projects/image.png"

  }
];

function Badge({ children }) {
  return (
    <span className="inline-block px-2 py-1 mr-2 mb-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-medium tracking-wide">
      {children}
    </span>
  );
}

export default function App() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
      window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  }, []);

 

  return (
    <div className="font-[Inter] min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
     
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
<section 
  className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 pt-28 mb-24"
  data-aos="fade-up"
>
  <div className="md:w-2/3 space-y-4">
    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Salut, je suis Mohamed Sellak  <span className="text-white" >👋</span>
    </h1>
    
    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      Développeur fullstack passionné, spécialisé en <b>React</b> et <b>Laravel</b>.
      Je conçois des applications web performantes et intuitives.
    </p>

    {/* Boutons */}
    <div className="flex flex-wrap gap-4 mt-4">
     
      <a
        href="/CV.pdf"
        download
        className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
      >
        <button className="flex items-center gap-2">
      <FaDownload />
      Télécharger mon CV
    </button>
        
      </a>
    </div>
  </div>

  {/* Avatar */}
  <div data-aos="fade-left" className="mt-10 md:mt-0 relative w-48 md:w-64 mx-auto">
    {/* Halo flou derrière l'avatar */}
    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-40 blur-3xl"></div>

    <img
      src="/profile.JPG"
      alt="avatar"
      className="w-full rounded-full border-4 border-blue-500/40 shadow-2xl hover:scale-105 transition-transform"
    />
  </div>
</section>

<About/>

    {/* Compétences */}
<Skills/>

<Experience/>

     <section id="projects" data-aos="fade-up" className="max-w-6xl mx-auto mb-24 px-6">
  <h3 className="text-3xl font-bold mb-8 text-center text-purple-600 dark:text-purple-400">
    Projets récents
  </h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {projects.map(p => (
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
          <div className="mb-3">{p.tech.map(t => <Badge key={t}>{t}</Badge>)}</div>
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


      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="max-w-3xl mx-auto mb-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Intéressé par une collaboration, un projet ou une opportunité ? Contactez-moi 👇
        </p>

        <ContactForm/>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
  href="https://mail.google.com/mail/?view=cm&to=mohamedsellak597@gmail.com&su=Contact%20Portfolio&body=Bonjour%20Mohamed"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all"
>
  Email 
</a>
          <a href="tel:+212681226124" className="px-6 py-3 rounded-lg border border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all">
            +212 6 81 22 61 24
          </a>
          <a href="https://www.linkedin.com/in/mohamed-sellak-28a87539b/" target="_blank" className="px-6 py-3 rounded-lg border border-purple-500 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition-all">
            LinkedIn
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
