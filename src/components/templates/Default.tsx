import React, { FC } from 'react';

import AppHeader from 'components/organisms/AppHeader';
import AppFooter from 'components/organisms/AppFooter';
import styles from 'styles/components/templates/Default.module.scss';

const Default: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <AppFooter />
      </div>
    </div>
  );
};

export default Default;
