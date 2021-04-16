import React, { FC } from 'react';

import { Event } from 'apis/connpassAPI';
import { formatDate, formatTime } from 'app/date';
import styles from 'styles/components/organisms/EventDetailHeader.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';
import link from 'images/commons/icon-link.svg';

interface EventDetailHeaderProps {
  event: Event;
}

const EventDetailHeader: FC<EventDetailHeaderProps> = ({
  event: {
    title,
    catch: catcher,
    started_at: startedAt,
    ended_at: endedAt,
    address,
    owner_display_name: ownerDisplayName,
    series,
    accepted,
    limit,
  },
}) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>
        {catcher && (
          <>
            <p className={styles.description}>{catcher}</p>
            <hr className={styles.line} />
          </>
        )}
        <div className={styles.datetime}>
          {startedAt && (
            <time
              className={`${styles.date} ${styles.icon}`}
              style={{ backgroundImage: `url(${calendar})` }}
            >
              {formatDate(startedAt)}
            </time>
          )}
          {(startedAt || endedAt) && (
            <time className={styles.time}>
              {startedAt && formatTime(startedAt)} ~{' '}
              {endedAt && formatTime(endedAt)}
            </time>
          )}
        </div>
        {address && (
          <address
            className={`${styles.address} ${styles.icon}`}
            style={{ backgroundImage: `url(${map})` }}
          >
            {address}
          </address>
        )}
        <div className={styles.bottom}>
          <cite className={styles.owner}>
            <span
              className={`${styles.author} ${styles.icon}`}
              style={{ backgroundImage: `url(${author})` }}
            >
              {ownerDisplayName || ''}
            </span>
            {series && series.title && series.url && (
              <span className={styles.group}>
                （＠
                <a
                  href={series.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${link})` }}
                >
                  {series.title}
                </a>
                ）
              </span>
            )}
          </cite>
          <p className={styles.participant}>
            参加者: {accepted?.toLocaleString() || '0'} /{' '}
            {limit !== null ? limit.toLocaleString() : '∞'} 人
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailHeader;
