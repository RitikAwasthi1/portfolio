import { motion } from "framer-motion";

import {
  FaJava,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

        <p className="text-gray-300 leading-8 mb-6">
        I'm a B.Tech Artificial Intelligence & Data Science student with a strong
        interest in software development and technology. I have started learning
        Java and continuously improve my programming skills by building projects
        and exploring modern development tools.
        </p>


        </motion.div>

        {/* Right Side */}
        
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <FaJava className="text-5xl mx-auto text-orange-500 mb-4" />
            <h3 className="font-semibold">Java (Learning)</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <FaHtml5 className="text-5xl mx-auto text-orange-600 mb-4" />
            <h3 className="font-semibold">HTML</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <FaGitAlt className="text-5xl mx-auto text-red-500 mb-4" />
            <h3 className="font-semibold">Git & GitHub</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <VscVscode className="text-5xl mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold">VS Code</h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;