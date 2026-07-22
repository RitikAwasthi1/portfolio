import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTimes,
  FaExternalLinkAlt,
  FaPython,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    icon: "🤖",
    title: "ResumeIQ",
    subtitle: "AI Powered Resume Analyzer",

    shortDescription:
      "An AI-powered resume analyzer that evaluates resumes and provides ATS improvement suggestions.",

    description:
      "ResumeIQ helps job seekers improve resumes using AI. It parses resumes, calculates ATS score, detects missing keywords and provides personalized improvement suggestions before applying for jobs.",

    features: [
      "ATS Score",
      "Resume Parsing",
      "Keyword Detection",
      "Resume Suggestions",
      "Fast Analysis",
      "Responsive UI",
    ],

    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
    ],

    github: "https://github.com/RitikAwasthi1",

    techIcons: [
      <FaPython key="python" />,
      <SiFlask key="flask" />,
      <SiHtml5 key="html" />,
      <FaCss3Alt key="css" />,
    ],
  },

  {
    id: 2,
    icon: "🏥",
    title: "QuickMed",
    subtitle: "Medical Diagnosis Platform",

    shortDescription:
      "Healthcare application that predicts diseases using symptoms and recommends doctors.",

    description:
      "QuickMed allows users to enter symptoms to receive possible disease predictions, healthcare guidance, remedies and nearby doctor recommendations.",

    features: [
      "Disease Prediction",
      "Doctor Recommendation",
      "Symptom Analysis",
      "Responsive Design",
      "Healthcare Guidance",
      "Clean Interface",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/RitikAwasthi1",

    techIcons: [
      <SiHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <SiJavascript key="js" />,
    ],
  },

  {
    id: 3,
    icon: "💻",
    title: "Developer Portfolio",
    subtitle: "Modern React Portfolio",

    shortDescription:
      "Responsive portfolio showcasing projects, skills and experience using React.",

    description:
      "Modern portfolio built using React, Tailwind CSS and Framer Motion with responsive layouts, reusable components and beautiful animations.",

    features: [
      "Responsive Layout",
      "Reusable Components",
      "Smooth Animations",
      "Project Showcase",
      "Contact Form",
      "Modern UI",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github:
      "https://github.com/RitikAwasthi1/portfolio",

    techIcons: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiNodedotjs key="vite" />,
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my favorite projects showcasing my
            skills in Full Stack Development,
            Artificial Intelligence and Web
            Technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700"
            >
              <div className="text-6xl mb-5">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.subtitle}
              </p>

              <p className="text-gray-300 mb-6">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.techIcons.map((icon, index) => (
                  <span
                    key={index}
                    className="text-2xl text-cyan-400"
                  >
                    {icon}
                  </span>
                ))}
              </div>

                <div className="flex gap-3">
                              <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
                >
                  Read More
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 flex items-center justify-center rounded-xl bg-slate-700 hover:bg-slate-600 transition"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </motion.div>
          ))}

        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-2xl max-w-2xl w-full p-8 relative border border-slate-700 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white"
                >
                  <FaTimes size={24} />
                </button>

                <div className="text-6xl mb-4">
                  {selectedProject.icon}
                </div>

                <h2 className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>

                <p className="text-cyan-400 mb-6">
                  {selectedProject.subtitle}
                </p>

                <p className="text-gray-300 leading-7 mb-8">
                  {selectedProject.description}
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Key Features
                </h3>

                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="bg-slate-700 rounded-lg px-4 py-3"
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition"
                  >
                    <FaExternalLinkAlt />
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}