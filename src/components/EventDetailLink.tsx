import React, { FC } from 'react';

import styles from 'styles/components/EventDetailLink.module.scss';
import link from 'images/commons/icon-link.svg';

const EventDetailLink: FC = () => {
  return (
    <a
      href="https://connpass.com/"
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
