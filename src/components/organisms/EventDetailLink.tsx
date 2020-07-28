import React, { FC } from 'react';

import { Event } from 'apis/connpassAPI';
import styles from 'styles/components/organisms/EventDetailLink.module.scss';
import link from 'images/commons/icon-link.svg';

interface EventDetailLinkProps {
  event: Event;
}

const EventDetailLink: FC<EventDetailLinkProps> = ({
  event: { event_url: eventUrl },
}) => {
  return (
    <a
      href={eventUrl}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.container}
      style={{ backgroundImage: `url(${link})` }}
    >
      このイベントを公式サイトで見る
    </a>
  );
};

export default EventDetailLink;
