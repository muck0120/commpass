import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'stores';
import AppHeader from 'components/organisms/AppHeader';
import AppFooter from 'components/organisms/AppFooter';
import AppLoading from 'components/organisms/AppLoading';
import styles from 'styles/components/templates/Default.module.scss';
import { STATUS } from 'apis/connpassAPI';

const Default: FC = ({ children }) => {
  const load1: STATUS = useSelector((state: RootState) => state.events.status);
  const load2: STATUS = useSelector((state: RootState) => state.event.status);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <AppFooter />
      </div>
      {(load1 === STATUS.LOADING || load2 === STATUS.LOADING) && <AppLoading />}
    </div>
  );
};

export default Default;
