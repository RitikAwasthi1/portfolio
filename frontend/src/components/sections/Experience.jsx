import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "B.Tech - Artificial Intelligence & Data Science",
    company: "Dr. A.P.J. Abdul Kalam Technical University",
    year: "2023 - 2027",
    description:
      "Pursuing B.Tech with a focus on AI, Data Science, Java programming, and Full Stack Development.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Java Full Stack Developer",
    company: "Self Learning & Personal Projects",
    year: "2025 - Present",
    description:
      "Building full-stack web applications using Java, Spring Boot, React, MySQL, Tailwind CSS, and REST APIs.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Education & Experience
          </h2>

          <p className="text-gray-400 mt-4">
            My learning journey and development experience.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-blue-500 ml-6">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className="mb-14 ml-10 relative"
            >

              <div className="absolute -left-16 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {item.icon}
              </div>

              <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-500 mb-4">
                  {item.year}
                </p>

                <p className="text-gray-300 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;