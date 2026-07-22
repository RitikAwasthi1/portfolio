import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Ritik Awasthi
            </h2>

            <p className="text-gray-400 leading-7">
              Java Full Stack Developer passionate about building
              scalable web applications using React, Spring Boot
              and MySQL.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-blue-400">
                  Experience
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 mb-6">

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

            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <div className="text-center text-gray-400">

          © {new Date().getFullYear()} Ritik Awasthi. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;