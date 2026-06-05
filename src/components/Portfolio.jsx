import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    img: "/pw1.jpg",
    sliderImages: ["/pw1.jpg", "/pw2.jpg", "/pw3.jpg"],
    title: "LMS - Personal Learning Companion",
    description:
      "A cutting-edge, AI-powered Learning Management System (LMS) built as a full-stack SaaS platform. It features secure user authentication with Clerk, a responsive frontend built with the Next.js framework, and a scalable Supabase database backend. The core feature is an interactive, voice-based AI tutor integration powered by Vapi-ai, providing a personalized e-learning user experience.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vapi-ai", "Clerk"],
    links: {
      site: "https://personal-learning-saas-app.vercel.app/",
      github: "https://github.com/allahrakha-7/saas-personal-learning-app",
    },
    featured: true,
  },
  {
    img: "/ecom1.jpg",
    sliderImages: ["/ecom1.jpg", "/ecom2.jpg", "/ecom3.jpg", "/ecom4.jpg", "/ecom5.jpg", "/ecom6.jpg", "/ecom7.jpg", "/ecom8.jpg"],
    title: "Multivendor E-Commerce Web App",
    description:
      "A feature-rich, full-stack multivendor e-commerce marketplace and SaaS shopping platform, modeled after Etsy and Amazon. Engineered using the MERN stack (React, Node.js, Express.js, MongoDB database), this web application enables individual sellers to build storefronts, manage products inventory, and process secure checkout payments via Stripe API integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    links: {
      site: "https://www.mutltivendor.site/",
      github: "https://github.com/allahrakha-7/Multi-Vender-Project",
    },
    featured: true,
  },
  {
    img: "/p1.jpg",
    sliderImages: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p5.jpg", "/p6.jpg"],
    title: "Real Estate Web App",
    description:
      "A dynamic, full-stack real estate web application and property listing management platform. Built using the MERN stack, this application features advanced database search filters, custom REST API backend, secure user profile dashboards for saving properties, and an interactive agent-client portal.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    links: {
      site: "https://real-estate-project-nine-theta.vercel.app/",
      github: "https://github.com/allahrakha-7/Real-Estate-Project",
    },
    featured: true,
  },
  {
    img: "/ruwwaad1.jpg",
    sliderImages: ["/ruwwaad1.jpg", "/ruwwaad2.jpg", "/ruwwaad4.jpg", "/ruwwaad5.jpg", "/ruwwaad6.jpg", "/ruwwaad7.jpg", "/ruwwaad8.jpg", "/ruwwaad9.jpg", "/ruwwaad10.jpg", "/ruwwaad11.jpg"],
    title: "Ruwwaad Technologies Site",
    description:
      "A corporate full-stack website designed and developed for Ruwwaad Technologies. Built on the MERN stack with React.js frontend and secure Node.js/Express.js backend for client inquiries. Features custom content management with MongoDB database and a real-time admin portal dashboard to seamlessly update services and company news.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Framer Motion", "TailwindCSS"],
    links: {
      site: "#",
      github: "https://github.com/allahrakha-7/ruwwaad",
    },
    featured: true,
  },
  {
    img: "/sociosmart-1.jpeg",
    sliderImages: ["/sociosmart-1.jpeg", "/sociosmart-3.jpeg", "/sociosmart-4.jpeg", "/sociosmart-5.jpeg", "/sociosmart-6.jpeg", "/sociosmart-7.jpeg", "/sociosmart-8.jpeg", "/sociosmart-9.jpeg", "/sociosmart-10.jpeg", "/sociosmart-11.jpeg"],
    title: "SocioMart - Society Management App",
    description:
      "A comprehensive, high performance mobile society management system built with React Native and powered by a scalable Node.js backend. Engineered to streamline residential community operations, SocioMart enables secure resident authentication, maintenance request tracking, real time security alerts, visitor management, and digital billing systems in a single, intuitive mobile dashboard.",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    links: {
      site: "https://drive.google.com/drive/folders/1n2ouHOC1Yy9iQRwyWThMxfdaJkihTqPG?usp=drive_link",
      github: "https://github.com/allahrakha-7/socio-smart",
    },
    featured: true,
    isApp: true,
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="portfolio" className="py-20 bg-[#00171f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
                <span className="text-[#cccccc] font-medium tracking-wider uppercase text-sm">
                  My Work
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#007ea7] to-[#00a8e8]"></div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-[#ffffff] mb-6"
              >
                Featured{" "}
                <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                  Projects
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed"
              >
                A showcase of my recent work, featuring full-stack applications,
                mobile apps, and web platforms built with modern technologies.
              </motion.p>
            </div>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div
                  className="flex-1 relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#003459] shadow-2xl border-2 border-[#003459] hover:border-[#00a8e8]/50 transition-all duration-300">
                    {project.isApp ? (
                      <div className="flex justify-center bg-[#00171f] py-8 w-full h-[250px] sm:h-[350px] lg:h-[400px]">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00171f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] text-sm font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl font-bold text-[#ffffff] mb-4"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-[#cccccc] text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-[#003459] text-[#00a8e8] rounded-lg text-sm font-medium border border-[#003459]"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
                    >
                      <BiLinkExternal size={20} />
                      {project.isApp ? "App Preview" : "Live Demo"}
                    </motion.a>

                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
                    >
                      <AiOutlineGithub size={20} />
                      Source Code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-16"
            >
              <motion.a
                href="https://github.com/allahrakha-7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
              >
                <AiOutlineGithub size={24} />
                View More Projects on GitHub
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;