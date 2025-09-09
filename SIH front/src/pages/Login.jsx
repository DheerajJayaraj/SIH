import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className={styles.loginBg}>
      <div className={styles.loginContainer}>
        <div className={styles.flagBar}></div>
        <div className={styles.loginTitle}>College ERP Login</div>
        <div className={styles.loginSubtitle}>Empowering Education, Progress, and Inclusion</div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required autoComplete="username" />
          <input type="password" placeholder="Password" required autoComplete="current-password" />
          <button className={styles.loginBtn} type="submit">Login</button>
        </form>
        <div className={styles.loginNav}>
          <span>Don't have an account?</span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
