import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>New</span>
            Smart scheduling is now live
          </div>
          <h1 className={styles.title}>
            The command center for your <span className={styles.highlight}>academic life.</span>
          </h1>
          <p className={styles.subtitle}>
            Organize notes, track assignments, and manage your deadlines in one unified workspace designed specifically for computer engineering students.
          </p>
          
          <div className={styles.actions}>
            <button className="btn btn-primary">
              Start for free
              <ArrowRight size={18} className={styles.btnIcon} />
            </button>
            <button className="btn btn-secondary">
              View demo
            </button>
          </div>
          
          <ul className={styles.features}>
            <li><CheckCircle2 size={16} /> No credit card required</li>
            <li><CheckCircle2 size={16} /> Free for students</li>
            <li><CheckCircle2 size={16} /> Syncs with Google Calendar</li>
          </ul>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.mockupContainer}>
            {/* Using a structural placeholder with CSS to look like a real app instead of a generic image */}
            <div className={styles.browserHeader}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.sidebar}>
                <div className={styles.sidebarItem}></div>
                <div className={styles.sidebarItem}></div>
                <div className={styles.sidebarItem}></div>
                <div className={styles.sidebarItem}></div>
              </div>
              <div className={styles.mainContent}>
                <div className={styles.header}>
                  <div className={styles.headerTitle}></div>
                  <div className={styles.headerAvatar}></div>
                </div>
                <div className={styles.dashboardGrid}>
                  <div className={styles.cardMain}>
                    <div className={styles.cardTitle}></div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.cardLine}></div>
                    <div className={styles.cardLine}></div>
                  </div>
                  <div className={styles.cardSide}>
                    <div className={styles.cardTitle}></div>
                    <div className={styles.taskItem}></div>
                    <div className={styles.taskItem}></div>
                    <div className={styles.taskItem}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
