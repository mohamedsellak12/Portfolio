import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 px-6 mt-10 border-t">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* 🔹 About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Mohamed Sellak</h2>
          <p className="text-sm leading-relaxed">
            Développeur Full Stack spécialisé en React, Angular et Laravel.
            Je crée des applications web modernes, performantes et scalables.
          </p>
        </div>

        {/* 🔹 Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">À propos</a></li>
            <li><a href="#projects" className="hover:underline">Projets</a></li>
            <li><a href="#skills" className="hover:underline">Compétences</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <div className="flex flex-col gap-3 text-sm">
            
            <a 
              href="https://mail.google.com/mail/?view=cm&to=mohamedsellak597@gmail.com&su=Contact%20Portfolio&body=Bonjour%20Mohamed" 
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <FaEnvelope />
              mohamedsellak597@gmail.com
            </a>

            <div className="flex gap-4 text-2xl mt-2">
              <a 
                href="https://github.com/mohamedsellak12" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/mohamed-sellak-28a87539b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className="text-center mt-10 text-sm border-t pt-4">
        © {new Date().getFullYear()} Mohamed Sellak. Tous droits réservés.
      </div>
    </footer>
  );
}