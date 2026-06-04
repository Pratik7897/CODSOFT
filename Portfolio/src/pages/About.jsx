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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-[#0a0a0a] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 border-b border-gray-200 dark:border-[#222222] pb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">About Me</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
          Get to know more about my background, education, and skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            My Journey
          </h2>
          <div className="bg-white dark:bg-[#111111] p-8 border border-gray-200 dark:border-[#222222]">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a Computer Engineering student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. I enjoy building practical web applications and continuously improving my development skills through projects and hands-on learning.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to become a skilled software engineer capable of building scalable and impactful solutions. I am constantly exploring new technologies and pushing my boundaries to create better digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            Education
          </h2>
          <div className="bg-white dark:bg-[#111111] p-8 border border-gray-200 dark:border-[#222222]">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">B.Tech Computer Engineering</h3>
            <h4 className="text-gray-600 dark:text-gray-400 font-medium mb-4">Pimpri Chinchwad College of Engineering (PCCOE)</h4>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <span className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1 border border-gray-200 dark:border-[#333333]">2024 – 2028</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-[#222222] pb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="bg-white dark:bg-[#111111] p-6 border border-gray-200 dark:border-[#222222]">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-[#222222]">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-300 text-sm border border-gray-200 dark:border-[#333333]">
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
