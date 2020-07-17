import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Event } from 'utils/interfaces';
import styles from 'styles/components/molecules/EventListCard.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';

export interface EventProps {
  event: Event;
}

const EventListCard: FC<EventProps> = ({ event }) => {
  return (
    <Link to="/event" target="_blank" className={styles.container}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.description}>{event.catcher}</p>
      <hr className={styles.line} />
      <div className={styles.footer_top}>
        <time
          className={`${styles.date} ${styles.icon}`}
          style={{ backgroundImage: `url(${calendar})` }}
        >
          {event.date}
        </time>
        <address
          className={`${styles.address} ${styles.icon}`}
          style={{ backgroundImage: `url(${map})` }}
        >
          {event.address}
        </address>
      </div>
      <div className={styles.footer_bottom}>
        <cite className={styles.owner}>
          <span
            className={`${styles.author} ${styles.icon}`}
            style={{ backgroundImage: `url(${author})` }}
          >
            {event.owner}
          </span>
          <span className={styles.group}>（＠{event.series}）</span>
        </cite>
        <p className={styles.participant}>
          参加者：{event.accepted}/{event.limit}人
        </p>
      </div>
    </Link>
  );
};

export default EventListCard;
