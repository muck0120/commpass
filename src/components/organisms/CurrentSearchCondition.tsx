import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import styles from 'styles/components/organisms/CurrentSearchCondition.module.scss';

const CurrentSearchCondition: FC = () => {
  const params = new URLSearchParams(useLocation().search);
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.heading}>現在の検索条件</h2>
        <ul className={styles.content}>
          <li className={styles.list}>
            <span className={styles.title}>都道府県：</span>
            <span className={styles.data}>
              {params.get('prefecture') || 'すべて'}
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>並び順：</span>
            <span className={styles.data}>
              {params.get('orderBy') === '2'
                ? '開催日時順'
                : params.get('orderBy') === '3'
                ? '新着順'
                : '更新日時順'}
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>言語・技術：</span>
            <span className={styles.data}>
              {params.get('languages')
                ? params.get('languages')?.split(',').join(', ')
                : 'すべて'}
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>フレームワーク：</span>
            <span className={styles.data}>
              {params.get('frameworks')
                ? params.get('frameworks')?.split(',').join(', ')
                : 'すべて'}
            </span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>開催日：</span>
            <span className={styles.data}>2020年7月7日</span>
          </li>
          <li className={styles.list}>
            <span className={styles.title}>キーワード：</span>
            <span className={styles.data}>
              {params.get('keywords')
                ? params.get('keywords')?.split(',').join(', ')
                : '-'}
            </span>
          </li>
        </ul>
      </div>
      <button
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        type="button"
        className={styles.button}
      >
        条件を変更する
      </button>
    </div>
  );
};

export default CurrentSearchCondition;
