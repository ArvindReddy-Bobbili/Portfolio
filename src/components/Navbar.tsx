import { useState, useEffect } from 'react';
import { Menu, Heart, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';
import faviconImg from '/Favicon.jpeg';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#experience', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme, isLiked, toggleLike } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 overflow-hidden rounded-lg">
              <img
                src={faviconImg}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:arvindreddybobbili@gmail.com"
                className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ArvindReddy-Bobbili"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arvind-reddy-bobbili/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleLike}
                className="p-2 text-black dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors"
                aria-label={isLiked ? 'Unlike' : 'Like'}
              >
                <Heart className={cn("w-6 h-6", isLiked && "fill-current")} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <a
              href="mailto:arvindreddybobbili@gmail.com"
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ArvindReddy-Bobbili"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arvind-reddy-bobbili/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLike}
              className="p-2 text-black dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart className={cn("w-6 h-6", isLiked && "fill-current")} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black dark:text-white"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;