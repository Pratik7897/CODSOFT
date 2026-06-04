import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] pt-16 pb-8 border-t border-gray-200 dark:border-[#222222] mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Pratik Shinde</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              A passionate B.Tech CS student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. Dedicated to creating engaging digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Pratik7897" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/pratikshinde07" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:shindepraatik@gmail.com" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope size={16} className="text-gray-900 dark:text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">Email</p>
                  <a href="mailto:shindepraatik@gmail.com" className="text-gray-600 dark:text-gray-400 text-sm hover:text-black dark:hover:text-white transition-colors">shindepraatik@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt size={16} className="text-gray-900 dark:text-white mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Pune, Maharashtra, India</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 h-4 w-4 flex items-center justify-center">
                  <div className="h-2 w-2 bg-gray-900 dark:bg-white"></div>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-bold">Status</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Available for opportunities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-[#222222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Pratik Shinde. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            Built using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
