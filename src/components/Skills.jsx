import { useState } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
import {
  SiTypescript,
  SiExpress,
  SiVercel,
  SiSupabase,
  SiMysql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = {
  Frontend: [
    { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <DiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
    { name: "React-Native", icon: <TbBrandReactNative className="text-white" /> },
    { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <BiLogoBootstrap className="text-purple-600" /> },
    { name: "Sass", icon: <DiSass className="text-pink-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  ],
  Database: [
    { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-green-600" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
    { name: "Supabase", icon: <SiSupabase className="text-blue-500" /> },
  ],
  Tools: [
    { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ],
};

const categories = ["All", ...Object.keys(skillCategories)];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }, // Add exit animation
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? Object.values(skillCategories).flat()
      : skillCategories[activeCategory];

  return (
    <section id="skills" className="py-12 lg:py-20 bg-[#00171f]">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* --- Title Section (Reskinned) --- */}
        <div className="flex justify-center">
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 lg:gap-3 mb-4"
            >
              <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
              <span className="text-[#cccccc] font-medium tracking-wider uppercase text-xs lg:text-sm whitespace-nowrap">
                Technical Expertise
              </span>
              <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#007ea7] to-[#00a8e8]"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 lg:mb-6"
            >
              Skills &{" "}
              <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed px-4"
            >
              Proficient in MERN stack technologies and modern web development, with hands-on experience in building scalable REST APIs, responsive user interfaces, and cloud-hosted application architecture.
            </motion.p>
          </div>
        </div>

        {/* --- NEW: Boundary container for buttons and grid --- */}
        <div className="max-w-6xl mx-auto">
          {/* --- Filter Buttons --- */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 font-semibold rounded-full transition-all duration-300 ${activeCategory === category
                  ? "bg-[#00a8e8] text-[#00171f]" // Active
                  : "bg-[#003459] text-[#cccccc] hover:bg-[#007ea7]" // Inactive
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* --- Filterable Icon Grid --- */}
          <motion.div
            key={activeCategory}
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <div key={skill.name} className="relative group">
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-center aspect-square bg-[#003459]/50 backdrop-blur-sm rounded-lg p-4 border border-[#003459] transition-all duration-300 hover:border-[#00a8e8]/50 hover:bg-[#003459]"
                  >
                    <div className="text-4xl md:text-5xl text-gray-200 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </motion.div>

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#00a8e8] text-[#00171f] px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                    {skill.name}
                  </span>
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* --- End Boundary container --- */}


        {/* --- Additional Stats (Reskinned) --- */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { number: "1+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#cccccc] font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;