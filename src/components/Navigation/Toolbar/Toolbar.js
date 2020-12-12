import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import styles from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle click={props.drawerToggleClick} />
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
