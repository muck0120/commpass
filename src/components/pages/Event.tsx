import React, { FC } from 'react';

import DefaultTemplate from 'components/templates/Default';
import EventDetailHeader from 'components/organisms/EventDetailHeader';
import EventDetailLink from 'components/organisms/EventDetailLink';
import EventDetailContent from 'components/organisms/EventDetailContent';
import EventDetailMap from 'components/organisms/EventDetailMap';
import RelatedEvents from 'components/organisms/RelatedEvents';
import styles from 'styles/components/pages/Event.module.scss';

const Event: FC = () => {
  return (
    <DefaultTemplate>
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
    </DefaultTemplate>
  );
};

export default Event;
