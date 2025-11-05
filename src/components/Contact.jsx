import { useState } from "react"; 
import { motion } from "framer-motion";
import { BiCurrentLocation } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa"; 
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "923018082787";

    const formattedMessage = `*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-[#00171f]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* --- Title Section --- */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 lg:gap-3 mb-4"
          >
            <div className="w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#00a8e8] to-[#007ea7]"></div>
            <span className="text-[#cccccc] font-medium tracking-wider uppercase text-xs lg:text-sm whitespace-nowrap">
              Get In Touch
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
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-[#cccccc] max-w-3xl mx-auto leading-relaxed px-4"
          >
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          <motion.div
            className="space-y-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#003459] rounded-2xl p-6 lg:p-8 border border-[#003459] shadow-lg"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#ffffff] mb-6">
                About Me
              </h3>
              <p className="text-[#cccccc] leading-relaxed mb-6">
                I am a skilled software developer with experience in building
                scalable web applications using React, Next.js, Express.js and
                Node.js. I specialize in creating user-friendly
                interfaces and robust backend systems, with a strong focus on
                performance and efficiency.
              </p>
              <p className="text-[#cccccc] leading-relaxed">
                Passionate about solving challenges and delivering impactful
                solutions, I enjoy working on innovative projects that make a
                difference.
              </p>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#003459] rounded-2xl p-6 lg:p-8 border border-[#003459] shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#ffffff] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00a8e8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AiOutlineMail className="text-[#00a8e8]" size={20} />
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm">Email</p>
                    <p className="text-[#ffffff] font-medium">
                      armozi07911000@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00a8e8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BiCurrentLocation
                      className="text-[#00a8e8]"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm">Location</p>
                    <p className="text-[#ffffff] font-medium">Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & Socials Row */}
            <div className="grid grid-cols-2 gap-2">
              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="bg-[#003459] rounded-2xl p-6 text-center border border-[#003459] shadow-lg"
              >
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "5+", label: "Projects" },
                    { number: "2+", label: "Years Exp." },
                    { number: "15+", label: "Happy Clients" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-lg max-sm:text-lg lg:text-3xl font-bold bg-gradient-to-r from-[#00a8e8] to-[#007ea7] bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-[#999999] text-sm max-sm:text-[10px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Socials */}
              <motion.div
                variants={itemVariants}
                className="bg-[#003459] rounded-2xl p-6 flex items-center justify-center gap-4 border border-[#003459] shadow-lg"
              >
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 max-sm:w-7 max-sm:h-7 bg-[#00171f]/50 hover:bg-[#00a8e8]/10 rounded-full flex items-center justify-evenly text-[#999999] hover:text-white transition-all duration-300 border border-[#00171f]"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* --- Right Column (Form) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#003459] rounded-2xl p-6 lg:p-8 border border-[#003459] shadow-lg"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#ffffff] mb-6">
              Send Message
            </h3>

            {/* 5. Updated form to use onSubmit */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#cccccc] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    value={name} // 6. Bind to state
                    onChange={(e) => setName(e.target.value)} // 7. Update state
                    className="w-full px-4 py-3 bg-[#00171f] border border-[#003459] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#cccccc] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={email} // Bind to state
                    onChange={(e) => setEmail(e.target.value)} // Update state
                    className="w-full px-4 py-3 bg-[#00171f] border border-[#003459] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#cccccc] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text" id="subject" name="subject" required
                  value={subject} // Bind to state
                  onChange={(e) => setSubject(e.target.value)} // Update state
                  className="w-full px-4 py-3 bg-[#00171f] border border-[#003459] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/50 transition-all duration-300"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#cccccc] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={6} required
                  value={message} // Bind to state
                  onChange={(e) => setMessage(e.target.value)} // Update state
                  className="w-full px-4 py-3 bg-[#00171f] border border-[#003459] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* 8. Updated Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
              >
                <FaWhatsapp size={20} />
                Send on WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;