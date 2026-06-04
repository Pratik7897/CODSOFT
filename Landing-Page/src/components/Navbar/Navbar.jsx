import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = ({ onOpenAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <div className={styles.logo}>
          <BookOpen className={styles.logoIcon} />
          <span>StudySync</span>
        </div>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          
          <div className={styles.navActions}>
            <button className={`${styles.loginBtn}`} onClick={onOpenAuth}>Log in</button>
            <button className={`btn btn-primary ${styles.signupBtn}`} onClick={onOpenAuth}>Sign up free</button>
          </div>
        </nav>

        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
