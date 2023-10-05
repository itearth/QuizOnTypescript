import React from 'react';
import styles from './HomePage.module.css'; // Import styles from the module CSS
import { Link } from 'react-router-dom';
import Navbar from '../../generics/Navbar/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles['centered-container']}>
          <Link to="/quiztype" className={styles.button}>
            Take Quiz
          </Link>
          <Link to="/weather" className={styles.button}>
            Weather
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

