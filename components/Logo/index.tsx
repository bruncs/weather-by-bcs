import React from 'react';

import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return <img className={styles.logo} alt="Weather by BCS" src="/images/logo.svg" />;
};

export default Logo;
