import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import profileImg from '../assets/pratik.png';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-2 border border-gray-200 dark:border-[#222222] px-4 py-1 mb-8">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Pratik Shinde
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium mb-8 h-10 flex items-center">
              <span className="text-gray-600 dark:text-gray-400 mr-2">I am a</span>
              <span className="text-gray-900 dark:text-white font-semibold">
                <Typewriter
                  words={['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              I am a Computer Engineering student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. I enjoy building practical web applications and continuously improving my development skills through projects and hands-on learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium transition-colors hover:bg-gray-800 dark:hover:bg-gray-200">
                About Me
              </Link>
              <Link to="/projects" className="px-8 py-3 bg-transparent border border-gray-300 dark:border-[#444444] text-gray-900 dark:text-white font-medium transition-colors hover:border-black dark:hover:border-white">
                View Projects
              </Link>
            </div>
          </motion.div>
          
          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              <div className="absolute inset-0 overflow-hidden bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-[#222222]">
                <img 
                  src={profileImg} 
                  alt="Pratik Shinde" 
                  className="w-full h-full object-cover object-[center_20%] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
