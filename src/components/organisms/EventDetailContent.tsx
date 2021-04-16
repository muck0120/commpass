import React, { FC } from 'react';

import { Event } from 'apis/connpassAPI';
import { formatDate } from 'app/date';
import styles from 'styles/components/organisms/EventDetailContent.module.scss';

interface EventDetailContentProps {
  event: Event;
}

const EventDetailContent: FC<EventDetailContentProps> = ({
  event: { description, updated_at: updatedAt },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>イベント詳細</h3>
      <div className={styles.content}>
        {/* eslint react/no-danger: 0 */}
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={styles.description}
        />
        {updatedAt && (
          <time className={styles.updated_at}>
            最終更新日：{formatDate(updatedAt)}
          </time>
        )}
      </div>
    </div>
  );
};

export default EventDetailContent;
