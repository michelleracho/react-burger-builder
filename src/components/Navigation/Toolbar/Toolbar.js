import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo height="80%" />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
