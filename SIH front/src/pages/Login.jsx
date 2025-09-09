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
      <svg className={styles.animatedFlower} viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="48" rx="18" ry="8" fill="#6dd5fa" opacity="0.18"/>
        <path d="M32 12 Q40 32 32 36 Q24 32 32 12" fill="#2a5298" opacity="0.7"/>
        <path d="M32 12 Q36 24 32 36 Q28 24 32 12" fill="#2451a6"/>
        <circle cx="32" cy="36" r="6" fill="#fff"/>
      </svg>
      <div className={styles.loginContainer}>
        <div className={styles.flagBar}></div>
        <div className={styles.loginTitle}>College ERP Login</div>
        <div className={styles.loginSubtitle}>Empowering Education, Progress, and Inclusion</div>
        <form className={styles.loginForm}>
          <input type="text" placeholder="Username" required autoComplete="username" />
          <input type="password" placeholder="Password" required autoComplete="current-password" />
          <button className={styles.loginBtn} type="submit">Login</button>
        </form>
        <div style={{marginTop:'1.2rem', textAlign:'center'}}>
          <span style={{color:'#2451a6', fontSize:'0.98rem'}}>Don't have an account?</span>
          <Link to="/signup" style={{color:'#2a5298', textDecoration:'underline', fontWeight:500, marginLeft:'0.3em'}}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
