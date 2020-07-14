import React, { FC } from 'react';

import DefaultTemplate from 'components/templates/Default';
import SearchForm from 'containers/organisms/SearchForm';
import CurrentSearchCondition from 'components/organisms/CurrentSearchCondition';
import EventListCard from 'components/molecules/EventListCard';
import EventListPager from 'components/molecules/EventListPager';
import styles from 'styles/components/pages/Home.module.scss';

const Home: FC = () => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div key={index} className={styles.articles_card}>
              <EventListCard />
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
