import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.module.css';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div className={`${styles.Logo} ${styles.DesktopOnly}`}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
