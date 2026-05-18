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
  const fullText = "Mobile Application Developer | Flutter | React Native";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const projects = [
    {
      title: "Al Quran App",
      desc: "آل القرآن is a beautifully designed Islamic mobile application built with Flutter and Dart that helps users stay connected with the Holy Quran and daily Islamic practices. The app allows users to read the complete Quran with all 114 Surahs, listen to audio recitations, and bookmark both Surahs and individual Ayahs for quick access later. It also includes a digital Zikr/Tasbeeh counter managed with Provider state management, daily prayer timings based on the user’s current location, and a Hadith section with books and chapters fetched through API integration. The app uses Hive for offline bookmark storage, provides a clean and user-friendly Islamic UI with elegant Arabic fonts, and focuses on delivering a smooth spiritual experience for users.",
      img: heroimg,
       width: "100%",
    height: "250px",
      link: "https://github.com/hanifa-12/quran_app.git"
    },
    {
      title: "Expense Tracker",
      desc: "The Expense Tracker App is a simple and user-friendly Flutter application designed to help users manage their daily finances efficiently. Users can add income and expense transactions with categories, notes, and amounts, while the app automatically calculates total income, expenses, and remaining balance. It also provides a graphical pie chart representation of spending categories for better financial analysis. The app uses Hive local storage, allowing all data to be stored offline without requiring an internet connection.",
      img: expenseimg,
       width: "100%",
    height: "250px",
      link: "https://github.com/hanifa-12/expense_tracker.git"
    },
    {
      title: "Coming Soon: Travel Planner App",
      desc: "Coming Soon: Travel Planner App",
      img: coming,
       width: "100%",
    height: "250px",
      link: "#"
    }
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_id",
      "template_id",
      formData,
      "public_key"
    ).then(() => {
      alert("Message Sent Successfully");
      setFormData({ name: "", email: "", message: "" });
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-blue-50 text-gray-900"} min-h-screen transition-all duration-300`}>

      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-1 rounded text-blue-600">
            {darkMode ? "Light" : "Dark"}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4"
          >
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

     <motion.section
  id="home"
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6 }}
  className="min-h-screen flex items-center px-6 md:px-16 pt-28 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900"
>
  <div className="grid md:grid-cols-2 gap-12 items-center w-full">

    {/* LEFT CONTENT */}
    <div className="space-y-6">

      <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
        Mobile App Developer 🚀
      </span>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Hi, I'm <span className="text-blue-600">Hanifa Habib</span> 👋
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {typedText}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 pt-2">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src={responsive}
          alt="hero"
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover rounded-3xl shadow-2xl border-4 border-blue-200 dark:border-gray-700"
        />

        {/* decorative glow */}
        <div className="absolute -inset-3 bg-blue-200 blur-3xl opacity-30 rounded-full -z-10"></div>
      </div>
    </div>

  </div>
</motion.section>

      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="min-h-screen px-10 py-16 bg-blue-50 dark:bg-gray-900"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">App Store Projects 🚀</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={p.img} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
                <p className="text-sm mt-2 mb-4">{p.desc}</p>
                <a className="text-blue-600" href={p.link} target="_blank">View on GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="px-10 py-16"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Contact Me</h2>

        <form onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="p-3 border rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="p-3 border rounded" />
          <button className="bg-blue-600 text-white py-2 rounded">Send Message</button>
        </form>
      </motion.section>

       <footer className="py-8 text-center border-t border-blue-100 dark:border-slate-800">

        <p className="text-blue-600 font-semibold">

          Deploy on Vercel:
          Developed By Hanifa 🚀

        </p>

      </footer>

    </div>
  );
}
