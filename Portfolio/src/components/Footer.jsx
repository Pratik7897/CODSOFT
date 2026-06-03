import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#070a13] pt-16 pb-8 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Pratik Shinde</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A passionate B.Tech CS student at PCCOE with a strong interest in Full Stack Development, Data Structures & Algorithms, and problem solving. Dedicated to creating engaging digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Pratik7897" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaGithub size={20} className="text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/pratikshinde07" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaLinkedin size={20} className="text-gray-300" />
              </a>
              <a href="mailto:shindepraatik@gmail.com" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <FaEnvelope size={20} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope size={18} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <a href="mailto:shindepraatik@gmail.com" className="text-blue-400 text-sm hover:underline">shindepraatik@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt size={18} className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Location</p>
                  <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Status</p>
                  <p className="text-green-400 text-sm">Available for opportunities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 Pratik Shinde. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
