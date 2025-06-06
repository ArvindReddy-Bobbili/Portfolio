import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-2xl font-bold mb-6 cursor-pointer"
          >
            Arvind Reddy Bobbili
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Follow Me Section */}
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/arvind-reddy-bobbili/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-800 rounded-full text-secondary-300 hover:text-primary-400 hover:bg-secondary-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ArvindReddy-Bobbili"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-800 rounded-full text-secondary-300 hover:text-primary-400 hover:bg-secondary-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary-400 text-sm">
            <p>© {new Date().getFullYear()} Arvind Reddy Bobbili. All rights reserved.</p>
            <p className="mt-1">Designed & Built with ❤️</p>
          </div>

          {/* Scroll to top */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mt-8 p-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white shadow-lg transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;