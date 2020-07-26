import React, { FC } from 'react';

import styles from 'styles/components/organisms/AppLoading.module.scss';

const AppLoading: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dots}>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default AppLoading;
