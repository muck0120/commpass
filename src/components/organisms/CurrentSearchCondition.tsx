import React, { FC } from 'react';

import styles from 'styles/components/organisms/CurrentSearchCondition.module.scss';

const CurrentSearchCondition: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.heading}>現在の検索条件</h2>
        <ul className={styles.content}>
          <li className={styles.list}>
            <span className={styles.title}>都道府県：</span>
            <span className={styles.data}>東京</span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>並び順：</span>
            <span className={styles.data}>新着順</span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>言語・技術：</span>
            <span className={styles.data}>
              HTML, CSS, JavaScript, Java, PHP, Ruby, Python
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>フレームワーク：</span>
            <span className={styles.data}>
              Ruby on Rails, Laravel, Express, CakePHP, Vue, React
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>開催日：</span>
            <span className={styles.data}>2020年7月7日</span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>キーワード：</span>
            <span className={styles.data}>
              あいうえお, かきくけこ, テストテスト, ダミーテキスト
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.button}>条件を変更する</div>
    </div>
  );
};

export default CurrentSearchCondition;
