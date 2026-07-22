import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Contact Me
          </h2>

          <p className="text-gray-400">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-gray-400">
                  youremail@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-bold">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 XXXXXXXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-full">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/RitikAwasthi1"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-5 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-5 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 mb-5 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message..."
              className="w-full p-4 rounded-lg bg-slate-800 outline-none mb-5"
            ></textarea>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-lg font-semibold flex justify-center items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;