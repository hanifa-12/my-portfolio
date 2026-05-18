import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import heroimg from "./assets/al-quran.jpg";
import expenseimg from "./assets/expense.jpg";
import coming from "./assets/coming.jpg";
import responsive from "./assets/responsive.png";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Mobile Application Developer | Flutter | React Native";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const projects = [
    {
      title: "Al Quran App",
      desc: "Complete Quran app with bookmarks, prayer timing, tasbeeh counter and Hadith integration.",
      img: heroimg,
      link: "https://github.com/hanifa-12/quran_app.git",
    },

    {
      title: "Expense Tracker",
      desc: "Offline expense tracker with Hive database and financial analytics.",
      img: expenseimg,
      link: "https://github.com/hanifa-12/expense_tracker.git",
    },

    {
      title: "Travel Planner",
      desc: "Coming soon travel planning application.",
      img: coming,
      link: "#",
    },
  ];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_id",
        "template_id",
        formData,
        "public_key"
      )
      .then(() => {
        alert("Message Sent");
      });
  };

  return (
    <div
      className={`min-h-screen transition duration-300 ${
        darkMode
          ? "bg-slate-950 text-gray-100"
          : "bg-blue-50 text-slate-900"
      }`}
    >

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-blue-100 dark:border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-2xl text-blue-600">
            Hanifa.dev
          </h1>

          <div className="hidden md:flex gap-10">

            <a href="#home">Home</a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
              {darkMode ? "☀" : "🌙"}
            </button>

            <button
              className="md:hidden"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              ☰
            </button>

          </div>

        </div>
      </nav>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="md:hidden fixed top-20 left-4 right-4 rounded-2xl bg-white dark:bg-slate-900 shadow-xl p-6 flex flex-col gap-5 z-40"
          >

            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Home
            </a>

            <a
              href="#projects"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contact
            </a>

          </motion.div>

        )}

      </AnimatePresence>

      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-16 pt-24"
      >

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">

              Mobile App Developer

            </span>

            <h1 className="mt-6 text-5xl font-bold">

              Hi I'm
              <span className="text-blue-600">
                {" "}
                Hanifa Habib
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">

              {typedText}

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src={responsive}
              className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-blue-200"
            />

          </div>

        </div>

      </section>

      <section
        id="projects"
        className="py-24 px-6 md:px-16"
      >

        <h2 className="text-center text-4xl font-bold text-blue-600 mb-14">

          My Apps

        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              whileHover={{
                y: -10,
              }}
              className={`rounded-3xl overflow-hidden shadow-xl ${
                darkMode
                  ? "bg-slate-900"
                  : "bg-white"
              }`}
            >

              <img
                src={p.img}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-blue-600 text-xl font-bold">

                  {p.title}

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300">

                  {p.desc}

                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-blue-600 font-semibold"
                >

                  GitHub →

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      <section
        id="contact"
        className="py-24 px-6"
      >

        <h2 className="text-center text-blue-600 text-4xl font-bold mb-10">

          Contact

        </h2>

        <form
          onSubmit={sendEmail}
          className={`max-w-2xl mx-auto p-8 rounded-3xl shadow-xl ${
            darkMode
              ? "bg-slate-900"
              : "bg-white"
          }`}
        >

          <div className="space-y-5">

            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border dark:bg-slate-800"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border dark:bg-slate-800"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border dark:bg-slate-800"
            />

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl">

              Send Message

            </button>

          </div>

        </form>

      </section>

      <footer className="py-8 text-center border-t border-blue-100 dark:border-slate-800">

        <p className="text-blue-600 font-semibold">

          Deploy on Vercel:
          Push → GitHub → Import Project → Deploy 🚀

        </p>

      </footer>

    </div>
  );
}