import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section id="benefits" className={`section ${styles.benefitsSection}`}>
      <div className="container">
        <h2 className="section-title">Designed for real students</h2>
        <p className="section-subtitle">
          We understand the chaos of university life because we've been there. StudySync cuts through the noise.
        </p>
        
        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Zap /></div>
            <div className={styles.itemContent}>
              <h3>Boosted Productivity</h3>
              <p>Students using StudySync report saving up to 4 hours a week by having all their materials and deadlines centralized, reducing the context-switching tax.</p>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.itemIcon}><Target /></div>
            <div className={styles.itemContent}>
              <h3>Laser Focus</h3>
              <p>Our minimalist interface and smart notification system ensure you only see what's immediately relevant, helping you maintain deep focus during study sessions.</p>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.itemIcon}><ShieldCheck /></div>
            <div className={styles.itemContent}>
              <h3>Reliable & Secure</h3>
              <p>Your notes and files are automatically backed up to the cloud. Access your workspace from your laptop, phone, or library computer with complete peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
