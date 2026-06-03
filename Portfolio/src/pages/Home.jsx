import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import profileImg from '../assets/pratik.jpg';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-6">
              <span className="text-xl">👋</span>
              <span className="text-sm font-medium text-gray-300">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Pratik Shinde
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center">
              <span className="text-gray-200 mr-2">I am a</span>
              <span className="text-gradient font-bold">
                <Typewriter
                  words={['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-400">Available for opportunities</span>
            </div>
            
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              I am a Computer Engineering student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. I enjoy building practical web applications and continuously improving my development skills through projects and hands-on learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                About Me
              </Link>
              <Link to="/projects" className="px-8 py-3 bg-card hover:bg-gray-800 border border-gray-700 text-white font-medium rounded-xl transition-all">
                View Projects
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium rounded-xl transition-all">
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl z-10 flex items-center justify-center bg-gray-900">
                <img 
                  src={profileImg} 
                  alt="Pratik Shinde" 
                  className="w-full h-full object-cover scale-[1.45] origin-[50%_15%]"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -right-4 md:right-4 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 z-20 shadow-xl"
              >
                <span className="text-blue-400 font-bold">{'</>'}</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-6 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 z-20 shadow-xl"
              >
                <span className="text-purple-400 text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
