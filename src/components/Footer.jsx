import { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import { Link } from "react-scroll";

const Footer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    // 1. Set background to 'rich_black'
    <footer className="bg-[#00171f] border-t border-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Section */}
            {/* 2. Increased col-span to match screenshot */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-[#ffffff] mb-4">
                  {/* 3. Styled name with 'picton_blue' */}
                  <span className="text-[#00a8e8]">Allah</span>
                  <span className="text-[#00a8e8]"> Rakha</span>
                </h3>
                <p className="text-[#cccccc] leading-relaxed mb-6 max-w-md">
                  Full stack engineer passionate about creating exceptional
                  digital experiences. Specializing in React, Node.js, and
                  modern web technologies.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-[#ffffff] font-semibold mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "About", to: "skills" }, // Assuming 'skills' is your About section's ID
                    { name: "Portfolio", to: "portfolio" },
                    { name: "Experience", to: "experience" },
                    { name: "Contact", to: "contact" },
                  ].map((link) => (
                    <li key={link.name} className="group flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                      <Link
                        to={link.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="text-[#999999] group-hover:text-[#00a8e8] group-hover:translate-x-1 transition-all duration-300 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-[#ffffff] font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Web Development",
                    "Mobile Apps",
                    "UI/UX Design",
                    "Consulting",
                  ].map((service) => (
                    <li key={service} className="group flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                      <span className="text-[#999999] group-hover:text-[#00a8e8] group-hover:translate-x-1 transition-all duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#999999] text-sm flex items-center gap-2 select-none"
            >
              © {currentYear} Allah Rakha. Made with
              <motion.span
                onClick={() => setIsLiked(!isLiked)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer inline-flex items-center justify-center text-red-500 transition-transform duration-200"
              >
                {isLiked || isHovered ? (
                  <AiFillHeart size={16} className="text-red-500" />
                ) : (
                  <AiOutlineHeart size={16} className="text-red-500" />
                )}
              </motion.span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#999999] text-sm flex items-center gap-2"
            >
              All rights reserved.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              // 8. Styled 'Back to Top' button
              className="flex items-center gap-2 px-4 py-2 bg-[#003459] hover:bg-[#007ea7] text-[#999999] hover:text-[#00a8e8] rounded-full transition-all duration-300 border border-[#003459] hover:border-[#00a8e8]/50"
              aria-label="Back to top"
            >
              <BiArrowToTop size={18} />
              <span className="text-sm text-[#ffffff]">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;