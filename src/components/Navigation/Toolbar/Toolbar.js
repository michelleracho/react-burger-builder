import React from 'react';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>links...</nav>
    </header>
  );
};

export default Toolbar;
