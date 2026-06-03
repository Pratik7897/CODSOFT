import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js'],
    Database: ['MongoDB'],
    Languages: ['C++', 'Java', 'Python'],
    Tools: ['Git', 'GitHub', 'VS Code']
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get to know more about my background, education, and skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-px bg-blue-500 mr-4"></span>
            My Journey
          </h2>
          <div className="glass-panel p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a Computer Engineering student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. I enjoy building practical web applications and continuously improving my development skills through projects and hands-on learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to become a skilled software engineer capable of building scalable and impactful solutions. I am constantly exploring new technologies and pushing my boundaries to create better digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-px bg-purple-500 mr-4"></span>
            Education
          </h2>
          <div className="glass-panel p-8 border-l-4 border-l-blue-500">
            <h3 className="text-xl font-bold text-white mb-2">B.Tech Computer Engineering</h3>
            <h4 className="text-blue-400 font-medium mb-4">Pimpri Chinchwad College of Engineering (PCCOE)</h4>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">2024 – 2028</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
