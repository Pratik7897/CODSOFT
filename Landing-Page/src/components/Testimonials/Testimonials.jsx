import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "StudySync entirely changed how I manage my coursework. Before this, I was losing track of PDF readings across three different cloud drives.",
    author: "David Chen",
    role: "Computer Science, Year 3",
    avatar: "DC"
  },
  {
    quote: "The built-in markdown editor for notes that links directly to my assignment deadlines is a game changer for my productivity.",
    author: "Sarah Jenkins",
    role: "Information Systems, Year 4",
    avatar: "SJ"
  },
  {
    quote: "I've tried generic notion templates, but having a platform built specifically around the college semester rhythm makes a huge difference.",
    author: "Marcus Thorne",
    role: "Software Engineering, Year 2",
    avatar: "MT"
  }
];

const Testimonials = () => {
  return (
    <section className={`section ${styles.testimonialsSection}`}>
      <div className="container">
        <h2 className="section-title">Loved by students</h2>
        <p className="section-subtitle">Don't just take our word for it.</p>
        
        <div className={styles.grid}>
          {testimonials.map((test, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.quote}>"{test.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{test.avatar}</div>
                <div>
                  <div className={styles.name}>{test.author}</div>
                  <div className={styles.role}>{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
