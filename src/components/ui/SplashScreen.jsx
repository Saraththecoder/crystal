import { motion } from 'framer-motion';
import logoImage from '../../assets/logo.png';

const SplashScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-brand-white flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img 
          src={logoImage} 
          alt="Crystal Maid Logo" 
          className="w-40 h-40 md:w-56 md:h-56 object-contain mb-6 mix-blend-multiply" 
        />
        <div className="flex items-center gap-2 overflow-hidden">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-navy"
          >
            Crystal
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-gold"
          >
            Maid
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
