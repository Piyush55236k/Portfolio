import { motion } from "framer-motion";

import weatherImg from "../assets/Weather.png";
import spotifyImg from "../assets/Isportify.png";
import textutilsImg from "../assets/TextUtils.png";
import taskizoImg from "../assets/Taskizo.png";
import tttImg from "../assets/TickTacToe.png";
import sundownImg from "../assets/Sundown.png";

const projects = [
  {
    title: "Weather App",
    tech: "React + OpenWeather API",
    demo: "https://countryweatherchecker-ten.vercel.app",
    github: "https://github.com/Piyush55236k/Weather-detect",
    image: weatherImg,
  },
  {
    title: "Spotify Clone",
    tech: "React + RapidAPI + Tailwind",
    demo: "https://isportify-alpha.vercel.app",
    github: "https://github.com/Piyush55236k/Isportify",
    image: spotifyImg,
  },
  {
    title: "TextUtils",
    tech: "React + Vanilla CSS",
    demo: "https://text-utils-blue-delta.vercel.app",
    github: "https://github.com/Piyush55236k/TextUtils",
    image: textutilsImg,
  },
  {
    title: "Taskizo",
    tech: "MERN + Socket.io",
    demo: "https://taskizo-website.vercel.app",
    github: "https://github.com/Piyush55236k/Taskizo-website",
    image: taskizoImg,
  },
  {
    title: "Tic Tac Toe Game",
    tech: "HTML + CSS + JS",
    demo: "https://tictactoe-gold-six.vercel.app/",
    github: "https://github.com/Piyush55236k/Tic-TacToe",
    image: tttImg,
  },
  {
    title: "Sundown Webpage",
    tech: "GSAP + Locomotive Scroll",
    demo: "https://sundown-web-page.vercel.app/",
    github: "https://github.com/Piyush55236k/SundownWebPage",
    image: sundownImg,
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-5">
                <h3 className="text-xl font-display font-semibold group-hover:text-red-500 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-body mt-1">{project.tech}</p>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
