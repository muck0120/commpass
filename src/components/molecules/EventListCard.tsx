import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Event } from 'apis/connpassAPI';
import { formatDate } from 'app/date';
import styles from 'styles/components/molecules/EventListCard.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';

export interface EventProps {
  event: Event;
}

const EventListCard: FC<EventProps> = ({
  event: {
    event_id: eventId,
    title,
    catch: catcher,
    started_at: startedAt,
    address,
    owner_display_name: ownerDisplayName,
    series,
    accepted,
    limit,
  },
}) => {
  return (
    <Link
      to={`/event/${eventId}${
        series && series.id ? `?series_id=${series.id}` : ''
      }`}
      target="_blank"
      className={styles.container}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      {catcher && <p className={styles.description}>{catcher}</p>}
      <hr className={styles.line} />
      <div className={styles.footer_top}>
        {startedAt && (
          <time
            className={`${styles.date} ${styles.icon}`}
            style={{ backgroundImage: `url(${calendar})` }}
          >
            {formatDate(startedAt)}
          </time>
        )}
        {address && (
          <address
            className={`${styles.address} ${styles.icon}`}
            style={{ backgroundImage: `url(${map})` }}
          >
            {address}
          </address>
        )}
      </div>
      <div className={styles.footer_bottom}>
        {ownerDisplayName && (
          <cite className={styles.owner}>
            <span
              className={`${styles.author} ${styles.icon}`}
              style={{ backgroundImage: `url(${author})` }}
            >
              {ownerDisplayName}
            </span>
            {series && series.title && (
              <span className={styles.group}>（＠{series.title}）</span>
            )}
          </cite>
        )}
        <p className={styles.participant}>
          参加者: {accepted?.toLocaleString() || '0'} /{' '}
          {limit !== null ? limit.toLocaleString() : '∞'} 人
        </p>
      </div>
    </Link>
  );
};

export default EventListCard;
