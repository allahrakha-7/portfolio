import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.8 },
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = project.sliderImages || [project.img]; 

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 pt-4 flex items-center justify-center bg-[#00171f]/80 backdrop-blur-md p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} 
    >
      <motion.div
        // 2. FIXED: Added pt-6 md:pt-8 for top spacing
        className="relative w-full max-w-2xl  bg-[#003459] rounded-2xl shadow-xl border border-[#007ea7]/50 pt-6 md:pt-8"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button (now respects top padding) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#999999] hover:text-[#ffffff] bg-[#00171f]/50 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* --- Image Slider --- */}
        <div className="relative w-full bg-[#00171f] ">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="w-full max-h-[70vh] object-contain" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-[#00171f]/50 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-[#00171f]/50 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-[#00a8e8]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- Project Description --- */}
        {/* This div already has p-6 md:p-10, which includes bottom padding */}
        <div className="p-6 md:p-10 max-h-40 overflow-y-auto scrollbar-thin scrollbar-hide scrollbar-thumb-[#007ea7]/50 scrollbar-track-transparent">
          <h2 className="text-3xl font-bold text-[#ffffff] mb-4">
            {project.title}
          </h2>
          <p className="text-[#cccccc] text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 max-sm:px-3 max-sm:py-2 max-sm:text-md px-6 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
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
              className="flex items-center gap-2 max-sm:px-3 max-sm:py-2 max-sm:text-md px-6 py-3 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
            >
              <AiOutlineGithub size={20} />
              Source Code
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sliderImages: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      site: PropTypes.string,
      github: PropTypes.string,
    }).isRequired,
  }).isRequired, 
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;