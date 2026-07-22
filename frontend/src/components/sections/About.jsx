import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

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
            I'm a passionate B.Tech Artificial Intelligence & Data Science
            student who enjoys building modern, scalable, and responsive
            web applications using Java, Spring Boot, React, and MySQL.
          </p>

          <p className="text-gray-400 leading-8">
            My goal is to become a professional Java Full Stack Developer
            and create impactful software solutions while continuously
            learning new technologies.
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
            <h3 className="font-semibold">Java</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <FaReact className="text-5xl mx-auto text-cyan-400 mb-4" />
            <h3 className="font-semibold">React</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <SiSpringboot className="text-5xl mx-auto text-green-500 mb-4" />
            <h3 className="font-semibold">Spring Boot</h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
            <SiMysql className="text-5xl mx-auto text-blue-400 mb-4" />
            <h3 className="font-semibold">MySQL</h3>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;