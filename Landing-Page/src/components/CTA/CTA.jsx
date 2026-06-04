import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to upgrade your study workflow?</h2>
          <p className={styles.subtitle}>
            Join thousands of students who are already using StudySync to stay organized and ace their exams.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-primary">Create Free Account</button>
            <p className={styles.disclaimer}>Takes less than 30 seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
