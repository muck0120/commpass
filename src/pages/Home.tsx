import React, { FC } from 'react';

import SearchCondition from 'components/SearchCondition';
import CurrentSearchCondition from 'components/CurrentSearchCondition';
import ArticleCard from 'components/ArticleCard';
import ArticlePager from 'components/ArticlePager';
import styles from 'styles/pages/Home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchCondition />
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
              <ArticleCard />
            </div>
          ))}
          <div className={styles.articles_pagination}>
            <ArticlePager />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
