import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Guest';
    const email = formData.get('email') || 'No email provided';
    const subject = formData.get('subject') || 'New Message from Portfolio';
    const message = formData.get('message') || '';
    
    // Actually trigger the email client to open and send the email
    const mailtoLink = `mailto:shindepraatik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;

    setStatus('sending');
    
    // Show success UI state
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-[#0a0a0a] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 border-b border-gray-200 dark:border-[#222222] pb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Let's Connect</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
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
          <div className="bg-white dark:bg-[#111111] p-6 border border-gray-200 dark:border-[#222222] flex items-start space-x-4">
            <div className="text-gray-900 dark:text-white mt-1">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-1">Email</h3>
              <a href="mailto:shindepraatik@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                shindepraatik@gmail.com
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#111111] p-6 border border-gray-200 dark:border-[#222222] flex items-start space-x-4">
            <div className="text-gray-900 dark:text-white mt-1">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-1">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
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
          <form className="bg-white dark:bg-[#111111] p-8 border border-gray-200 dark:border-[#222222]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-gray-200 text-sm font-bold mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333333] px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-gray-200 text-sm font-bold mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333333] px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-900 dark:text-gray-200 text-sm font-bold mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333333] px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Project Idea"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-900 dark:text-gray-200 text-sm font-bold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows="5" 
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333333] px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full sm:w-auto px-8 py-4 ${status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border border-transparent'} font-bold transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === 'sending' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <>
                  <span>Message Sent!</span>
                  <FaCheckCircle size={18} />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
