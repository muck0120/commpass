import React, { FC } from 'react';

import styles from 'styles/components/EventDetailMap.module.scss';

const EventDetailContent: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>開催場所</h3>
      <div className={styles.content}>{/*  */}</div>
    </div>
  );
};

export default EventDetailContent;
