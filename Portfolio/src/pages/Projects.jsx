import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Internship Portal',
    description: 'A platform for internship management and student opportunities.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://intern-pccoe.vercel.app',
    github: 'https://github.com/Pratik7897/InternPC',
  },
  {
    id: 2,
    title: 'Social Visualizer',
    description: 'Data visualization and analytics platform.',
    tech: ['React', 'JavaScript'],
    live: 'https://social-connect-teal.vercel.app',
    github: 'https://github.com/Pratik7897/Social_Visualizer',
  },
  {
    id: 3,
    title: 'Design Thinking Platform',
    description: 'Collaborative platform for design thinking activities.',
    tech: ['React', 'Node.js'],
    live: 'https://design-thinking-platform-pearl.vercel.app',
    github: 'https://github.com/Pratik7897/design-thinking-platform',
  },
  {
    id: 4,
    title: 'Hand Drawing Using OpenCV',
    description: 'Computer vision application for virtual drawing using hand gestures.',
    tech: ['Python', 'OpenCV'],
    github: 'https://github.com/Pratik7897/Hand-Drawing',
  },
  {
    id: 5,
    title: 'Swarajya Vidya',
    description: 'Educational platform focused on constitutional learning and awareness.',
    tech: ['React', 'JavaScript'],
    live: 'https://swarajya-vidya.vercel.app',
    github: 'https://github.com/Pratik7897/Constitution-Of-India',
  },
  {
    id: 6,
    title: 'Lumiere Cosmetic Store',
    description: 'Modern e-commerce cosmetic store.',
    tech: ['React', 'Tailwind CSS'],
    live: 'https://lumiere-cosmetic-store.vercel.app',
    github: 'https://github.com/Pratik7897/lumiere-cosmetic-store',
  },
  {
    id: 7,
    title: 'Naruto Animation',
    description: 'Interactive anime-themed animation project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://naruto-animation-five.vercel.app',
    github: 'https://github.com/Pratik7897/Naruto-Animation',
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of projects that showcase my skills and passion for coding
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 flex flex-col h-full hover:border-blue-500/30 transition-all group hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800/50">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {project.live ? (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Live Demo
                </a>
              ) : (
                <div className="bg-gray-800/50 text-gray-500 text-center py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                  No Live Demo
                </div>
              )}
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors border border-gray-700"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
