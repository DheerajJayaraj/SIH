import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className={styles.signupBg}>
      <div className={styles.signupContainer}>
        <div className={styles.flagBar}></div>
        <div className={styles.signupTitle}>Sign Up</div>
        <div className={styles.signupSubtitle}>Create your account to get started</div>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required autoComplete="name" />
          <input type="email" placeholder="Email" required autoComplete="email" />
          <input type="text" placeholder="Username" required autoComplete="username" />
          <input type="password" placeholder="Password" required autoComplete="new-password" />
          <input type="password" placeholder="Confirm Password" required autoComplete="new-password" />
          <button className={styles.signupBtn} type="submit">Sign Up</button>
        </form>
        <div className={styles.signupNav}>
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
