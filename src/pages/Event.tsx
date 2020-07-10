import React, { FC } from 'react';

import EventDetailHeader from 'components/EventDetailHeader';
import EventDetailLink from 'components/EventDetailLink';
import EventDetailContent from 'components/EventDetailContent';
import EventDetailMap from 'components/EventDetailMap';
import RelatedEvents from 'components/RelatedEvents';
import styles from 'styles/pages/Event.module.scss';

const Event: FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <EventDetailHeader />
        </div>
        <div className={styles.link}>
          <EventDetailLink />
        </div>
        <div className={styles.content}>
          <EventDetailContent />
        </div>
        <div className={styles.map}>
          <EventDetailMap />
        </div>
        <div className={styles.link}>
          <EventDetailLink />
        </div>
      </main>
      <aside className={styles.sidebar}>
        <RelatedEvents />
      </aside>
    </div>
  );
};

export default Event;
