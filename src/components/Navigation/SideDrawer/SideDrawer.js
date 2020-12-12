import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './SideDrawer.module.css';

const SideDrawer = props => {
  // conditionally add css classes/animations when the drawer is shown

  return (
    <div className={styles.SideDrawer}>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
