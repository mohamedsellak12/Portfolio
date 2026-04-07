import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import ContactForm from "./Components/ContactForm";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import { useTranslation } from "react-i18next";



export default function App() {

  const {t}=useTranslation()

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
<Hero/>

<About/>

    {/* Compétences */}
<Skills/>

 {/* Expériences */}
<Experience/>

 {/* Projets */}
<Projects/>
  

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="max-w-3xl mx-auto mb-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {t("contact.title")}
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
