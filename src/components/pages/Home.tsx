import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Event } from 'utils/interfaces';
import DefaultTemplate from 'components/templates/Default';
import SearchForm from 'components/organisms/SearchForm';
import CurrentSearchCondition from 'components/organisms/CurrentSearchCondition';
import EventListCard from 'components/molecules/EventListCard';
import EventListPager from 'components/molecules/EventListPager';
import styles from 'styles/components/pages/Home.module.scss';

interface EventsState {
  events: Event[];
}

const Home: FC = () => {
  const events = useSelector((state: EventsState) => state.events);

  return (
    <DefaultTemplate>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <CurrentSearchCondition />
        </aside>
        <article className={styles.articles}>
          <div className={styles.articles_heading}>
            <h2 className={styles.articles_heading_title}>
              1,350件がヒットしました
            </h2>
            <div className={styles.articles_heading_page}>3/15ページ</div>
          </div>
          {events.map((event) => (
            <div key={event.id} className={styles.articles_card}>
              <EventListCard event={event} />
            </div>
          ))}
          <div className={styles.articles_pagination}>
            <EventListPager />
          </div>
        </article>
      </main>
    </DefaultTemplate>
  );
};

export default Home;
