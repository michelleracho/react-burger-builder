import React from 'react';

import logo from '../../assets/images/burger-logo.png';

import styles from './Logo.module.css';

const Logo = props => {
  return (
    <figure className={styles.Logo} style={{ height: props.height }}>
      <img src={logo} alt="Burger Builder" />
    </figure>
  );
};

export default Logo;
