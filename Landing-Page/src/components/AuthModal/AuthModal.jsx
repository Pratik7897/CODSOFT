import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './AuthModal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>
        
        {submitted ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h3>{isLogin ? 'Welcome back!' : 'Account Created!'}</h3>
            <p>Redirecting to your dashboard...</p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>{isLogin ? 'Welcome back' : 'Create your account'}</h2>
            <p className={styles.subtitle}>
              {isLogin ? 'Enter your details to access your workspace.' : 'Start organizing your academic life for free.'}
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              {!isLogin && (
                <div className={styles.inputGroup}>
                  <label htmlFor="modal-name">Full Name</label>
                  <input type="text" id="modal-name" required placeholder="John Doe" />
                </div>
              )}
              <div className={styles.inputGroup}>
                <label htmlFor="modal-email">Email</label>
                <input type="email" id="modal-email" required placeholder="john@university.edu" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="modal-password">Password</label>
                <input type="password" id="modal-password" required placeholder="••••••••" />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
            </form>
            
            <p className={styles.toggleText}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button className={styles.toggleBtn} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
