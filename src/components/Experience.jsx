import { motion } from "framer-motion";
import { BiCalendar, BiBriefcase } from "react-icons/bi";

const experiences = [
  {
    company: "Wolves Tech Solutions",
    role: "Full Stack Developer",
    period: "December 2025 - Present",
    type: "Full-time",
    description:
      "Leading full-stack development initiatives, building and maintaining scalable web applications using React and Next.js. Collaborating with cross-functional teams to enhance application performance and ensure seamless user experiences.",
    technologies: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    current: true,
  },
  {
    company: "Dev Weekends",
    role: "MERN Stack Developer",
    period: "Jun 2024 - Sep 2025",
    type: "Full-time",
    description:
      "Developed dynamic and robust web applications leveraging React, Next.js, Node.js, and Express. Implemented AWS Serverless technologies including Lambda, DynamoDB, and S3, with PostgreSQL for data-intensive applications.",
    technologies: ["React", "Next.js", "React Native", "Node.js", "Express.js", "PostgreSQL"],
    current: false,
  },
  {
    company: "Freelance Developer",
    role: "Full Stack Consultant",
    period: "Jan 2025 - Present",
    type: "Contract",
    description:
      "Providing full-stack development services to various clients, specializing in React, Next.js, Node.js, and Express applications. Expertise in AWS Serverless architecture and database management.",
    technologies: ["HTML5", "CSS3", "JS", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    current: true,
  },
  {
    company: "Decentral Developers",
    role: "Frontend Developer Intern",
    period: "Apr 2024 - Jul 2024",
    type: "Internship",
    description:
      "Completed frontend development internship, developing responsive and user-friendly interfaces. Contributed to real-world projects using modern JavaScript frameworks and CSS methodologies.",
    technologies: ["HTML5", "CSS3", "Sass", "Bootstrap", "Tailwind CSS", "JavaScript", "React"],
    current: false,
  },
];

const Experience = () => {
  return (

    <section id="experience" className="py-12 lg:py-20 bg-[#00171f]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

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
                Career Journey
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
              Work{" "}

              <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed px-4"
            >
              A professional timeline detailing my experience as a software engineer, building production-ready systems and delivering business value through full-stack development.
            </motion.p>
          </div>
        </div>

        <div className="relative right-3">

          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00a8e8] via-[#007ea7] to-[#00a8e8]"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >

                <div className="absolute left-2.5 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] rounded-full border-4 border-[#00171f] z-10">
                  {experience.current && (
                    <div className="absolute inset-0  bg-gradient-to-r from-[#00a8e8] to-[#007ea7] rounded-full animate-ping"></div>
                  )}
                </div>


                <div
                  className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#003459] rounded-2xl p-6 lg:p-8 border border-[#003459] hover:border-[#00a8e8]/50 transition-all duration-300 shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-[#ffffff] mb-1">
                          {experience.role}
                        </h3>

                        <h4 className="text-lg lg:text-xl text-[#00a8e8] font-semibold mb-2">
                          {experience.company}
                        </h4>
                      </div>
                      {experience.current && (

                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Period and Type */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-[#999999]">
                        <BiCalendar size={16} />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#999999]">
                        <BiBriefcase size={16} />
                        <span className="text-sm">{experience.type}</span>
                      </div>
                    </div>

                    <p className="text-[#cccccc] leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#00171f] text-[#00a8e8] rounded-full text-sm font-medium border border-[#003459]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;