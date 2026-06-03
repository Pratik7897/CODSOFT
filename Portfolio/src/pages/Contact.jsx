import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a Project in Mind?</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm always excited to work on new projects and collaborate with creative minds. Let's discuss how we can bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="glass-panel p-6 flex items-start space-x-4">
            <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a href="mailto:shindepraatik@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                shindepraatik@gmail.com
              </a>
            </div>
          </div>
          
          <div className="glass-panel p-6 flex items-start space-x-4">
            <div className="bg-purple-600/20 p-3 rounded-lg text-purple-400">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Location</h3>
              <p className="text-gray-400">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <form className="glass-panel p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Project Idea"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <FaPaperPlane size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
