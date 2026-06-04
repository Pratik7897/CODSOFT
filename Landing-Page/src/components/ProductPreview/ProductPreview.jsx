import React, { useState } from 'react';
import styles from './ProductPreview.module.css';

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <section className={`section ${styles.previewSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>A workspace that adapts to your semester</h2>
          <p>Toggle between Kanban boards for projects, list views for quick tasks, and a calendar for your week.</p>
        </div>
        
        <div className={styles.browserWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.dots}>
              <span></span><span></span><span></span>
            </div>
            <div className={styles.urlBar}>app.studysync.com/dashboard</div>
          </div>
          <div className={styles.windowBody}>
            <div className={styles.uiNav}>
              <div className={styles.navLogo}></div>
              <div 
                className={activeTab === 'board' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('board')}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              ></div>
              <div 
                className={activeTab === 'list' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('list')}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              ></div>
              <div 
                className={activeTab === 'calendar' ? styles.navItemActive : styles.navItem}
                onClick={() => setActiveTab('calendar')}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              ></div>
            </div>
            <div className={styles.uiMain}>
              <div className={styles.uiHeader}>
                <div className={styles.uiTitle}></div>
                <div className={styles.uiFilters}>
                  <div className={styles.uiFilter}></div>
                  <div className={styles.uiFilter}></div>
                </div>
              </div>
              
              {activeTab === 'board' && (
                <div className={styles.uiBoard}>
                  <div className={styles.uiColumn}>
                    <div className={styles.uiColHeader}></div>
                    <div className={styles.uiCard}></div>
                    <div className={styles.uiCard}></div>
                  </div>
                  <div className={styles.uiColumn}>
                    <div className={styles.uiColHeader}></div>
                    <div className={styles.uiCard}></div>
                  </div>
                  <div className={styles.uiColumn}>
                    <div className={styles.uiColHeader}></div>
                    <div className={styles.uiCard}></div>
                    <div className={styles.uiCard}></div>
                    <div className={styles.uiCard}></div>
                  </div>
                </div>
              )}

              {activeTab === 'list' && (
                <div className={styles.uiList}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={styles.uiListItem}>
                      <div className={styles.uiListCheck}></div>
                      <div className={styles.uiListText}></div>
                      <div className={styles.uiListTag}></div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'calendar' && (
                <div className={styles.uiCalendar}>
                  <div className={styles.uiCalGrid}>
                    {[...Array(35)].map((_, i) => (
                      <div key={i} className={styles.uiCalDay}>
                        {i === 12 && <div className={styles.uiCalEvent}></div>}
                        {i === 15 && <div className={styles.uiCalEvent}></div>}
                        {i === 24 && <div className={styles.uiCalEvent}></div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
