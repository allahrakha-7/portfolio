import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import PdfResume from '../../public/Allah Rakha_Full Stack Developer_Resume.pdf'

const Hero = () => {
  function downloadResumeAsPDF() {
    const link = document.createElement("a");
    link.href = PdfResume;
    link.download = "Allah Rakha_Full Stack Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section
      id="hero"
      // FIXED: Restored padding-top (pt-24) to create space for the navbar
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 md:px-20"
    >
      {/* === Animated Background === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00171f] via-[#00a8e8]/10 to-[#00171f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,232,0.1),transparent_50%)]"></div>
        <div
          className="absolute inset-0 bg-[size:60px_60px]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 52, 89, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 52, 89, 0.15) 1px, transparent 1px)'
          }}
        ></div>
      </div>
      {/* === End Animated Background === */}


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-[#00a8e8]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-[#007ea7]/10 rounded-full blur-xl"
        />
      </div>

      {/* Container no longer needs px-6, it's on the parent section */}
      <div className="container mx-auto relative z-10 w-full">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 pb-24 lg:pb-0">

          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // FIXED: Adjusted spacing for new padding
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
                <span className="text-[#cccccc] font-medium tracking-wider uppercase text-[13px]">
                  Welcome to my portfolio
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4 text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight"
                >
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
                    Allah Rakha
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-2xl lg:text-4xl font-semibold text-[#cccccc]"
                >
                  <TypeAnimation
                    sequence={[
                      "Full Stack Engineer", 2000,
                      "MERN Stack Specialist", 2000,
                      "React & Next.js Developer", 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent"
                  />
                </motion.div>
              </div>

              {/* Mobile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex-1 max-w-lg w-full relative flex justify-center items-center pt-8 lg:hidden"
              >
                <div className="relative w-72 h-72 rounded-full flex items-center justify-center overflow-hidden bg-[#003459]/20 shadow-lg border border-[#003459]">
                  <div className="absolute inset-0 bg-[#00a8e8]/20 rounded-full blur-3xl opacity-70 animate-pulse-slow" style={{ animationDuration: '6s' }} />
                  <img
                    src="/my_pic.jpg"
                    alt="Allah Rakha"
                    className="relative z-10 w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl text-[#cccccc] leading-relaxed max-w-xl text-center lg:text-left"
              >
                As an experienced Full Stack Engineer and MERN Stack Specialist, I design and build high performance and scalable web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center sm:items-center gap-6 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={downloadResumeAsPDF}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00a8e8]/25"
                >
                  <span className="relative z-10 text-white">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007ea7] to-[#003459] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                <div className="flex items-center gap-6">
                  <span className="text-[#cccccc] font-medium">Follow me:</span>
                  <div className="flex gap-4">
                    {[
                      { icon: AiOutlineGithub, href: "https://github.com/allahrakha-7/", label: "GitHub" },
                      { icon: AiOutlineLinkedin, href: "https://www.linkedin.com/in/allahrakha7/", label: "LinkedIn" },
                      { icon: AiOutlineInstagram, href: "https://www.instagram.com/allahrakha_821?igsh=MXVqOG9uZHh1d2V5bA==", label: "Instagram" },
                    ].map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 text-[#999999] hover:text-white transition-colors duration-300 hover:bg-[#00a8e8] rounded-full"
                        aria-label={label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex-1 max-w-lg w-full relative justify-center items-center hidden lg:flex"
          >
            <div className="relative w-72 h-76 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center overflow-hidden bg-[#003459]/20 shadow-lg border border-[#003459]">
              <div className="absolute inset-0 bg-[#00a8e8]/20 rounded-full blur-3xl opacity-70 animate-pulse-slow" style={{ animationDuration: '6s' }} />
              <img
                src="/my_pic.jpeg"
                alt="Allah Rakha"
                className="relative z-10 w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 lg:left-2/4 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#999999]"
        >
          <span className="text-sm font-medium text-white">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#999999] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#999999] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;