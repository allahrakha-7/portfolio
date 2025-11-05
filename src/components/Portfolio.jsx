import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/lms.jpg",
    title: "LMS - SaaS App",
    description:
      "A cutting-edge, AI-powered Learning Management System (LMS) built as a SaaS platform. It features secure authentication with Clerk, a modern frontend with Next.js, and a robust Supabase backend. The core feature is an interactive, voice-based AI tutor (powered by Vapi-ai) that provides a personalized and engaging learning experience.",
    technologies: ["Next.js", "TailwindCSS", "Supabase", "Vapi-ai", "Clerk"],
    links: {
      site: "https://personal-learning-saas-app.vercel.app/",
      github: "https://github.com/allahrakha-7/saas-personal-learning-app",
    },
    featured: true,
  },
  {
    img: "/eCom.jpg",
    title: "Multivendor E-Commerce App",
    description:
    "A feature-rich, full-stack multivendor e-commerce marketplace, similar to Etsy or Amazon. Built with the MERN stack (React, Node.js, Express, MongoDB), this platform allows individual sellers to create storefronts, manage inventory, and process sales securely using the integrated Stripe payment gateway.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    links: {
      site: "https://www.mutltivendor.site/",
      github: "https://github.com/allahrakha-7/Multi-Vender-Project",
    },
    featured: true,
  },
  {
    img: "/realestate.jpg",
    title: "Real Estate App",
    description:
      "A dynamic, full-stack real estate platform for browsing and managing property listings. This MERN stack application features advanced search and filtering, user accounts for saving favorite properties, and an agent dashboard. Includes Stripe integration for handling secure property bookings or application fees.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    links: {
      site: "https://real-estate-project-nine-theta.vercel.app/",
      github: "https://github.com/allahrakha-7/Real-Estate-Project",
    },
    featured: true,
  },
];
const Portfolio = () => {
  return (
    // 1. BG changed to 'rich_black'
    <section id="portfolio" className="py-20 bg-[#00171f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Title Section (Reskinned) --- */}
        <div className="flex justify-center">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              {/* 2. Gradient changed to 'picton_blue'/'cerulean' */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
              {/* 3. Text changed to 'white-400' */}
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
              {/* 4. Gradient changed to 'picton_blue'/'cerulean' */}
              <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              // 5. Text changed to 'white-400'
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
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="flex-1 relative group">
                {/* 6. BG changed to 'prussian_blue', added hover border */}
                <div className="relative overflow-hidden rounded-2xl bg-[#003459] shadow-2xl border-2 border-[#003459] hover:border-[#00a8e8]/50 transition-all duration-300">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00171f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      {/* 7. Badge gradient changed, text black for contrast */}
                      <span className="px-3 py-1 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] text-sm font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
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
                    // 8. Text changed to 'white-400'
                    className="text-[#cccccc] text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Technologies */}
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
                      // 9. Tech tags re-skinned
                      className="px-4 py-2 bg-[#003459] text-[#00a8e8] rounded-lg text-sm font-medium border border-[#003459]"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
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
                    // 10. Live Demo button re-skinned
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
                  >
                    <BiLinkExternal size={20} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    // 11. Source Code button re-skinned
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

        {/* View More Projects CTA */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/allahrakha-7/"
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
  );
};

export default Portfolio;