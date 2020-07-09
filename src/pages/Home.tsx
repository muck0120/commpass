import React, { FC } from 'react';

import SearchCondition from 'components/SearchCondition';
import styles from 'styles/pages/Home.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchCondition />
      </div>
      <main className={styles.main}>
        <aside className={styles.sidebar}>{/* 現在の検索条件 */}</aside>
        <article className={styles.articles}>{/* 記事一覧 */}</article>
      </main>
    </div>
  );
};

export default Home;
