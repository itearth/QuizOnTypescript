import React from 'react';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/services">Services</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
