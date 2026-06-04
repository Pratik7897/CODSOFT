import React from 'react';
import styles from './ProductPreview.module.css';

const ProductPreview = () => {
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
            {/* Abstract UI representation for the preview */}
            <div className={styles.uiNav}>
              <div className={styles.navLogo}></div>
              <div className={styles.navItemActive}></div>
              <div className={styles.navItem}></div>
              <div className={styles.navItem}></div>
            </div>
            <div className={styles.uiMain}>
              <div className={styles.uiHeader}>
                <div className={styles.uiTitle}></div>
                <div className={styles.uiFilters}>
                  <div className={styles.uiFilter}></div>
                  <div className={styles.uiFilter}></div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
