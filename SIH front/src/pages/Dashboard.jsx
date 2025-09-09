import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardBg}>
      <div className={styles.dashboardContainer}>
        <header className={styles.topbar}>
          <div className={styles.logoUser}>
            <img src="https://i.imgur.com/1Q9Z1Zm.png" alt="Vidya Logo" className={styles.logo} />
            <div className={styles.title}>Registration Form</div>
          </div>
          <nav className={styles.menu}>
            <a href="#" className={styles.active}>Admission</a>
            <a href="#">Dashboard</a>
            <a href="#">Hostel</a>
            <a href="#">Academics</a>
            <a href="#">Feedback</a>
            <a href="#">Scholarship</a>
            <a href="#">Transportation</a>
            <a href="#">Online Payments</a>
            <div className={styles.user}>
              <img src="https://erp.vidyaacademy.ac.in/web/static/src/img/user_menu_avatar.png" alt="User" />
              <span>DHEERAJ JAYARAJ <span className={styles.institute}>(Vidya Academy of Science & Technology)</span></span>
            </div>
          </nav>
        </header>
        <main className={styles.main}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>Registration</div>
            <a className={styles.sidebarLink + ' ' + styles.active} href="#">Admission Registration</a>
            <div className={styles.sidebarSection}>Admission</div>
            <a className={styles.sidebarLink} href="#">My Applications</a>
            <a className={styles.sidebarLink} href="#">New Application</a>
            <div className={styles.sidebarFooter}>Powered by <a href="#" style={{color:'#2451a6'}}>ITFlux</a></div>
          </aside>
          <section className={styles.content}>
            <div className={styles.contentHeader}>
              <button className={styles.btnPrimary}>Create</button>
              <span style={{margin:'0 0.5em', color:'#888'}}>or</span>
              <a href="#" className={styles.btnLink}>Import</a>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Registration Number</th>
                    <th>Application Date</th>
                    <th>Name (as per 10thCertificate)</th>
                    <th>Last Name</th>
                    <th>Registration For</th>
                    <th>Course</th>
                    <th>Admission Quota</th>
                    <th>Booking Fee</th>
                    <th>Amount Remitted</th>
                    <th>Last Updated Date</th>
                    <th>Application Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.selected}>
                    <td><input type="checkbox" checked readOnly /></td>
                    <td style={{color:'#2451a6', fontWeight:600}}>0003400</td>
                    <td style={{color:'#2451a6'}}>08/04/2024</td>
                    <td style={{color:'#2a5298', fontWeight:600}}>DHEERAJ</td>
                    <td style={{color:'#2a5298'}}>JAYARAJ</td>
                    <td>B.Tech 2024</td>
                    <td>B.Tech</td>
                    <td style={{color:'green'}}>Management</td>
                    <td>50000.00</td>
                    <td>134302.00</td>
                    <td>09/04/2024 09:16:56</td>
                    <td><input type="checkbox" checked readOnly disabled /></td>
                    <td style={{color:'green'}}>Confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
