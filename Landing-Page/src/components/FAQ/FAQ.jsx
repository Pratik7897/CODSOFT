import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Is StudySync really free for students?",
    answer: "Yes. Our core features—including task tracking, basic notes, and calendar sync—are 100% free for anyone with a valid .edu email address."
  },
  {
    question: "Can I import my data from Notion or Google Drive?",
    answer: "Absolutely. We offer a one-click import tool that pulls your existing markdown files from Notion and links your Google Drive folders directly to your workspace."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! The desktop and mobile apps cache your recent data, allowing you to view and edit notes offline. Changes automatically sync when you reconnect to the internet."
  },
  {
    question: "Can I collaborate with classmates who don't use StudySync?",
    answer: "You can share read-only public links to specific notes or project boards with anyone. To collaborate and edit together, they will need to create a free account."
  },
  {
    question: "How secure is my data?",
    answer: "We use AES-256 encryption at rest and TLS 1.2+ in transit. We never sell your personal data or study habits to third parties."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={`section ${styles.faqSection}`}>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
