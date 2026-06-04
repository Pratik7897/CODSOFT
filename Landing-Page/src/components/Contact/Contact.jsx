import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Get in Touch</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
            Have questions about StudySync or want to request a feature? Drop us a line.
          </p>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <Mail className={styles.icon} />
              <span>hello@studysync.app</span>
            </div>
            <div className={styles.detailItem}>
              <Phone className={styles.icon} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.detailItem}>
              <MapPin className={styles.icon} />
              <span>123 University Ave, Tech District</span>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" id="name" required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Doe"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">University Email</label>
            <input 
              type="email" id="email" required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@university.edu"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" rows="4" required 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
