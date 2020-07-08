import React, { FC } from 'react';
import PropTypes from 'prop-types';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import styles from 'styles/layouts/Default.module.scss';

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

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
