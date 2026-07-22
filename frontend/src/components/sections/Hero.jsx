import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profileImage from "../../assets/profile/profile.png";
console.log("Profile Image:", profileImage);
import resume from "../../assets/resume/Ritik_Awasthi_Resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-blue-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Ritik Awasthi
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6 h-10">
            <Typewriter
              words={[
                
                "Python Developer",
                "Java Learner",
                "AI & Data Science Student",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 leading-8 text-lg max-w-xl mb-8">
            Passionate about developing scalable web applications using 
            Python,Java, Spring Boot, React, MySQL and modern frontend technologies.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              Hire Me
            </a>

            <a
              href={resume}
              download="Ritik_Awasthi_Resume.pdf"
              className="border border-white px-7 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition duration-300"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/RitikAwasthi1"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-2xl opacity-40 animate-pulse"></div>

            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-2xl">

              <img
                src={profileImage}
                alt="Ritik Awasthi"
                className="w-full h-full rounded-full object-cover"
              />
                
                
                
              

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;