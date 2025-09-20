
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center p-4 border-t flex justify-center items-center gap-4">
      <span>© {new Date().getFullYear()} Mohamed Sellak</span>
      <a href="https://github.com/mohamedsellak12" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-gray-600 dark:hover:text-gray-300 text-2xl">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/mohamed-sellak-703b142a3/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-2xl">
        <FaLinkedin />
      </a>
    </footer>
  );
}
