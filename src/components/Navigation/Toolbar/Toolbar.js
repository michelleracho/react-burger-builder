import React from 'react';

import styles from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>links...</nav>
    </header>
  );
};

export default Toolbar;
