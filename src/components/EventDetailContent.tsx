import React, { FC } from 'react';

import styles from 'styles/components/EventDetailContent.module.scss';

const EventDetailContent: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>イベント詳細</h3>
      <div className={styles.content}>
        <time className={styles.updated_at}>最終更新日：2020/6/30</time>
      </div>
    </div>
  );
};

export default EventDetailContent;
