import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Java", level: 90, icon: <FaJava className="text-orange-500 text-4xl" /> },
  { name: "Spring Boot", level: 85, icon: <SiSpringboot className="text-green-500 text-4xl" /> },
  { name: "React", level: 88, icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
  { name: "MySQL", level: 82, icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: "Git", level: 80, icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            My Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use to build modern full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex items-center gap-5 mb-4">

                {skill.icon}

                <div className="flex-1">

                  <div className="flex justify-between mb-2">

                    <h3 className="font-semibold text-lg">
                      {skill.name}
                    </h3>

                    <span className="text-blue-400">
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;