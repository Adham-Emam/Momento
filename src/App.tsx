import React from "react";
import Typed from "typed.js";

import {
  Menu,
  X,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Moments that Inspire",
        "Success for Your Brand",
        "Connections that Last",
        "Magic for Your Vision",
        "Impact that Matters",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-dark/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 border-b border-dark-border">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="./logo.webp" alt="Logo" className="h-10 mr-2" />
              <span className="text-2xl font-bold text-indigo-400">
                Momento
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-indigo-400 transition"
                aria-label="Home"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-indigo-400 transition"
                aria-label="About"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-indigo-400 transition"
                aria-label="Projects"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="gradient-bg text-white px-4 py-2 rounded-md hover:opacity-90 duration-300"
                aria-label="Contact"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-indigo-400"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* {isMenuOpen && ( */}
        <div className="md:hidden">
          <div
            className={`fixed w-full h-screen inset-0 bg-black z-0 cursor-pointer duration-300  ${
              isMenuOpen
                ? "opacity-50 pointer-events-auto"
                : "pointer-events-none opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className={`w-48 h-[calc(100vh-64px)] overflow-y-auto absolute top-[64px] px-2 py-3 sm:px-3  border-dark-border bg-dark/90 backdrop-blur-sm z-50 border-r border-t duration-300 ${
              isMenuOpen ? "left-0" : "left-[-200px]"
            }`}
          >
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 border-b border-dark-border"
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 border-b border-dark-border"
              aria-label="About"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400 border-b border-dark-border"
              aria-label="Projects"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-indigo-400"
              aria-label="Contact"
            >
              Contact
            </a>
          </div>
        </div>
        {/* )} */}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen pt-20 lg:pt-28 overflow-hidden"
      >
        {/* Decorative shapes */}
        {/* <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
        <div className="hero-shape-3"></div>
        <div className="absolute inset-0 hero-grid"></div>
        <div className="absolute inset-0 hero-lines"></div> */}
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-28">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Crafting Digital</span>
                <span className="text-indigo-400" ref={el}></span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We transform ideas into immersive digital experiences through
                strategic design and innovative solutions.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg hover:opacity-90 md:py-4 md:text-lg md:px-10 duration-300"
                    aria-label="Contact"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2a1876] to-[#4424a8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-lighter relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Innovative solutions for the digital age
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Design",
                description:
                  "Creating stunning visual experiences that captivate",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Web Development",
                description: "Building powerful, scalable digital solutions",
                image:
                  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Brand Strategy",
                description: "Crafting unique identities that stand out",
                image:
                  "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-dark rounded-lg border border-dark-border overflow-hidden hover:border-indigo-500 duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                About Momento
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                We're a team of passionate creators and innovators, dedicated to
                crafting digital experiences that leave lasting impressions. Our
                approach combines creativity with cutting-edge technology.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                {[
                  { stat: "500+", label: "Projects Delivered" },
                  { stat: "98%", label: "Client Satisfaction" },
                  { stat: "15+", label: "Industry Awards" },
                  { stat: "24/7", label: "Support" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-t-2 border-dark-border pt-6"
                  >
                    <p className="text-3xl font-bold text-indigo-400">
                      {item.stat}
                    </p>
                    <p className="mt-2 font-medium text-gray-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <img
                className="rounded-lg border border-dark-border"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-lighter relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Showcasing our best digital experiences
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Platform",
                client: "Tech Innovation",
                image:
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Brand Evolution",
                client: "Creative Studio",
                image:
                  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=500",
              },
              {
                title: "Web Experience",
                client: "Future Forward",
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-dark rounded-lg border border-dark-border overflow-hidden hover:border-indigo-500 duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Let's create something amazing together
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <form
                className="space-y-6 relative"
                action="https://formspree.io/f/mqaerawy"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 block w-full rounded-md shadow-sm outline-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 block w-full rounded-md shadow-sm outline-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 p-2 block w-full rounded-md shadow-sm outline-0"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white gradient-bg hover:opacity-90 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Send Message"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-400" />
                <span className="ml-4 text-gray-400">hello@momento.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-400" />
                <span className="ml-4 text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-400" />
                <span className="ml-4 text-gray-400">
                  123 Digital Ave, Creative District, CD 12345
                </span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 duration-300"
                  aria-label="Linkedin"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-dark-border relative z-1">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-400 flex gap-2">
              <img src="./logo.webp" alt="Logo" className="h-10" />
              Momento
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 duration-300"
                aria-label="Linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-dark-border pt-8">
            <p className="text-center text-gray-400">
              &copy; 2025 Momento. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
