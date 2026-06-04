import { motion } from 'framer-motion';

const projects = [
  {
    id: 0,
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website with glassmorphism UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://pratik-portfolio-mauve.vercel.app',
    github: 'https://github.com/Pratik7897/CODSOFT/tree/main/Portfolio',
  },
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
    description: 'Advanced Data Structres Vizualizer With social media networking',
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
    live: 'https://hand-drawing-psi.vercel.app',
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
  },
  {
    id: 8,
    title: 'Nexus Store',
    description: 'An ultra-minimalist, high-profile e-commerce platform with a dynamic dark/light theme toggle and client-side routing.',
    tech: ['React', 'Vite', 'React Router', 'CSS3'],
    live: 'https://t5-flame.vercel.app/',
    github: 'https://github.com/Pratik7897/T5',
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-[#0a0a0a] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 border-b border-gray-200 dark:border-[#222222] pb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Selected Works</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
          A showcase of my recent projects and experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#111111] p-8 flex flex-col h-full border border-gray-200 dark:border-[#222222] hover:border-black dark:hover:border-white transition-colors group"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:underline underline-offset-4 decoration-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-[#333333]">
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
                  className="bg-black dark:bg-white text-white dark:text-black text-center py-3 text-sm font-medium transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 border border-transparent"
                >
                  Live Demo
                </a>
              ) : (
                <div className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-400 dark:text-gray-500 text-center py-3 text-sm font-medium cursor-not-allowed border border-transparent">
                  No Demo
                </div>
              )}
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#111111] text-gray-900 dark:text-white text-center py-3 text-sm font-medium transition-colors border border-gray-300 dark:border-[#444444] hover:border-black dark:hover:border-white"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
