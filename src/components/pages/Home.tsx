import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'stores';
import { fetchEvents } from 'stores/events';
import DefaultTemplate from 'components/templates/Default';
import SearchFormContainer from 'components/organisms/SearchFormContainer';
import CurrentSearchCondition from 'components/organisms/CurrentSearchCondition';
import EventListCard from 'components/molecules/EventListCard';
import EventListPager from 'components/molecules/EventListPager';
import styles from 'styles/components/pages/Home.module.scss';

const Home: FC = () => {
  const events = useSelector((state: RootState) => state.events.data.events);
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents(search));
  }, [search, dispatch]);

  return (
    <DefaultTemplate>
      <div className={styles.search}>
        <SearchFormContainer />
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
            <div key={event.event_id} className={styles.articles_card}>
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
