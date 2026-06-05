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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#00171f]/80 backdrop-blur-md p-4 overflow-y-auto"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} 
    >
      <motion.div
        className="relative w-full max-w-2xl bg-[#003459] rounded-2xl shadow-xl border border-[#007ea7]/50 pt-6 md:pt-8 my-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#999999] hover:text-[#ffffff] bg-[#00171f]/50 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* --- Image Slider --- */}
        <div className="relative w-full bg-[#00171f] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className={`mx-auto cursor-zoom-in hover:brightness-110 transition-all ${
                project.isApp
                  ? 'h-[48vh] sm:h-[55vh] md:h-[60vh] rounded-[24px] border border-[#007ea7]/30 shadow-2xl py-3 px-1.5'
                  : 'w-full h-[30vh] md:h-[40vh] object-contain'
              }`}
              onClick={() => setIsLightboxOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-[#00171f]/50 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-[#00171f]/50 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* --- Project Info & Description --- */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-3">
              {project.title}
            </h2>
            <div className="max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#007ea7]/50 scrollbar-track-transparent pr-2">
              <p className="text-[#cccccc] text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Fixed Actions */}
          <motion.div
            className="flex gap-4 pt-2"
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
              className="flex items-center gap-2 max-sm:px-4 max-sm:py-2.5 max-sm:text-sm px-6 py-3 bg-gradient-to-r from-[#00a8e8] to-[#007ea7] text-[#00171f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00a8e8]/25 transition-all duration-300"
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
              className="flex items-center gap-2 max-sm:px-4 max-sm:py-2.5 max-sm:text-sm px-6 py-3 bg-[#003459] text-[#cccccc] font-semibold rounded-lg border border-[#003459] hover:border-[#00a8e8]/50 hover:text-[#ffffff] transition-all duration-300"
            >
              <AiOutlineGithub size={20} />
              Source Code
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-[110] p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Close fullscreen view"
            >
              <X size={28} />
            </button>

            {/* Left Control */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-6 z-[110] -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${project.title} fullscreen screenshot ${currentIndex + 1}`}
              className={`mx-auto select-none ${
                project.isApp
                  ? 'max-h-[82vh] rounded-[32px] border border-white/20 shadow-2xl py-4 px-2 bg-[#00171f]'
                  : 'max-w-[95vw] max-h-[85vh] md:max-h-[90vh] object-contain'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right Control */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-6 z-[110] -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-[#00a8e8]/80 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
    isApp: PropTypes.bool,
  }).isRequired, 
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;