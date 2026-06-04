import React from 'react';
import { BookMarked, Calendar, CheckSquare, FolderOpen, PieChart, Users } from 'lucide-react';
import styles from './Features.module.css';

const featuresList = [
  {
    icon: <CheckSquare />,
    title: "Assignment Tracking",
    description: "Keep track of all your ongoing and upcoming assignments with status indicators and priority flags."
  },
  {
    icon: <BookMarked />,
    title: "Smart Notes",
    description: "Write rich-text notes that automatically link to related assignments and lecture materials."
  },
  {
    icon: <Calendar />,
    title: "Deadline Reminders",
    description: "Never miss a due date again. Get timely notifications for exams, submissions, and group meetings."
  },
  {
    icon: <FolderOpen />,
    title: "Resource Management",
    description: "Organize PDFs, links, and code snippets into logical folders synced across all your devices."
  },
  {
    icon: <PieChart />,
    title: "Progress Tracking",
    description: "Visualize your academic performance over the semester with intuitive graphs and goal setting."
  },
  {
    icon: <Users />,
    title: "Team Collaboration",
    description: "Share notes, split up project tasks, and coordinate with classmates on group assignments."
  }
];

const Features = () => {
  return (
    <section id="features" className={`section ${styles.featuresSection}`}>
      <div className="container">
        <h2 className="section-title">Everything you need to excel</h2>
        <p className="section-subtitle">
          Built-in tools to handle the heavy lifting of student life, so you can focus on actually learning.
        </p>
        
        <div className={styles.grid}>
          {featuresList.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
