import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Navbar = ({ theme, toggleTheme }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const navItems = [
    { name: "About", to: "skills" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#00171f]/80 backdrop-blur-lg shadow-lg border-b border-[#003459]"
        : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-12 h-20">

        {/* Logo - z-50 keeps it above the menu */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative z-50 ">
          <Link
            to="hero"
            smooth={true}
            offset={-80}
            duration={500}
            className="text-3xl font-bold text-[#00a8e8] cursor-pointer"
            onClick={closeNav}
          >
            AR.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={item.to}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-[#cccccc] hover:text-[#00a8e8] transition-colors duration-300 cursor-pointer font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a8e8] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full border border-[#003459] text-[#00a8e8] hover:bg-[#003459]/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] hover:from-[#007ea7] hover:to-[#003459] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-[#003459] text-[#00a8e8] hover:bg-[#003459]/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleNav}
            className="text-[#ffffff] p-2 flex items-center justify-center"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          // 2. FIXED: z-40 so it slides under the button/logo
          className="fixed left-0 top-0 w-full min-h-screen bg-[#00171f]/95 backdrop-blur-lg z-40 md:hidden"
        >
          {/* 3. FIXED: Changed layout to flex, added padding */}
          <div className="flex flex-col items-center h-full px-6 py-8">
            {/* 5. NEW: Centered links container */}
            <div className="flex flex-col mt-12 justify-center items-center flex-1">
              <ul className="space-y-8 text-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={nav ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeNav}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      // 6. FIXED: Eye-catching text
                      className="text-3xl font-semibold text-[#ffffff] hover:bg-gradient-to-r hover:from-[#00a8e8] hover:to-[#007ea7] hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={nav ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link
                  to="contact"
                  onClick={closeNav}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button className="px-16 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] hover:from-[#007ea7] hover:to-[#003459] text-white rounded-full font-medium text-xl">
                    Let&apos;s Talk
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;