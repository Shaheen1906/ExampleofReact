import React from "react";
import { Link } from "react-router-dom";

// CSS file
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <h1>Welcome to Demo</h1>
      <div className={`${styles.navigationButtonContainer}`}>
        <Link to="/">
          <button className={styles.navigationButton}>Demo1</button>
        </Link>
        <Link to="/contact">
          <button align="center" className={styles.navigationButton}>Demo2</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
