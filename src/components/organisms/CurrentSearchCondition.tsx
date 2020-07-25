import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import styles from 'styles/components/organisms/CurrentSearchCondition.module.scss';

const CurrentSearchCondition: FC = () => {
  const params = new URLSearchParams(useLocation().search);
  const ym = params.get('ym');
  const ymd = params.get('ymd');

  const formatYYYYMM = (yyyymm: string): string => {
    const yyyy = yyyymm.slice(0, 4);
    const mm =
      yyyymm.slice(4, 5) === '0' ? yyyymm.slice(5, 6) : yyyymm.slice(4, 6);
    return `${yyyy}年${mm}月`;
  };

  const formatYYYYMMDD = (yyyymmdd: string): string => {
    const yyyy = yyyymmdd.slice(0, 4);
    const mm =
      yyyymmdd.slice(4, 5) === '0'
        ? yyyymmdd.slice(5, 6)
        : yyyymmdd.slice(4, 6);
    const dd =
      yyyymmdd.slice(6, 7) === '0'
        ? yyyymmdd.slice(7, 8)
        : yyyymmdd.slice(6, 8);
    return `${yyyy}年${mm}月${dd}日`;
  };

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
            <span className={styles.data}>
              {ym ? formatYYYYMM(ym) : ymd ? formatYYYYMMDD(ymd) : 'すべて'}
            </span>
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
