import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lgem2o9",
        "template_76svs8s",
        form.current,
        "KKt9Z39KXsQ_3wWUP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message envoyé avec succès ✅");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Erreur lors de l'envoi ❌");
        }
      );
  };

  return (
   <section id="contact" className="max-w-3xl mx-auto mb-24 px-6">
 
  <form
    ref={form}
    onSubmit={sendEmail}
    className="flex flex-col gap-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl transition-all duration-300"
  >
    <input
      type="text"
      name="name"
      placeholder="Votre nom"
      required
      className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition-all duration-300 hover:border-blue-400 dark:hover:border-purple-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Votre email"
      required
      className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition-all duration-300 hover:border-blue-400 dark:hover:border-purple-400"
    />

    <textarea
      name="message"
      placeholder="Votre message"
      required
      rows="5"
      className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 resize-none transition-all duration-300 hover:border-blue-400 dark:hover:border-purple-400"
    />

    <button
      type="submit"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-transform duration-200"
    >
      Envoyer
    </button>

    {status && (
      <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
        {status}
      </p>
    )}
  </form>
</section>

  );
}
