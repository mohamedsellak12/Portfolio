import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 px-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* 🔹 About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t("footer.about_title")}</h2>
          <p className="text-sm leading-relaxed">{t("footer.about_desc")}</p>
        </div>

        {/* 🔹 Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t("footer.navigation_title")}</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">{t("footer.nav_about")}</a></li>
            <li><a href="#projects" className="hover:underline">{t("footer.nav_projects")}</a></li>
            <li><a href="#skills" className="hover:underline">{t("footer.nav_skills")}</a></li>
            <li><a href="#contact" className="hover:underline">{t("footer.nav_contact")}</a></li>
          </ul>
        </div>

        {/* 🔹 Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t("footer.contact_title")}</h2>
          <div className="flex flex-col gap-3 text-sm">
            <a 
              href={`https://mail.google.com/mail/?view=cm&to=${t("footer.email")}&su=${t("footer.email_link_subject")}&body=${t("footer.email_link_body")}`} 
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              <FaEnvelope />
              {t("footer.email")}
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
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}