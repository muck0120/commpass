import React, { FC } from 'react';

import SearchCondition from 'components/SearchCondition';
import CurrentSearchCondition from 'components/CurrentSearchCondition';
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
        <article className={styles.articles}>{/* 記事一覧 */}</article>
      </main>
    </div>
  );
};

export default Home;
