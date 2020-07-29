import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from 'styles/components/molecules/EventListPager.module.scss';
import prev from 'images/components/EventListPager/pager-prev.svg';
import next from 'images/components/EventListPager/pager-next.svg';
import { scrollToTopOfCardList } from 'app/scroller';

interface EventListPagerProps {
  current: number;
  total: number;
}

const EventListPager: FC<EventListPagerProps> = ({ current, total }) => {
  const { search } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        {current > 1 && (
          <Link
            to={`/${current - 1}${search}`}
            onClick={scrollToTopOfCardList}
            className={styles.prev}
          >
            <img src={prev} alt="Prev" />
          </Link>
        )}
      </div>
      <div className={styles.numbers}>
        {current >= 3 && (
          <Link
            to={`/1${search}`}
            onClick={scrollToTopOfCardList}
            className={`${styles.number} ${styles.first}`}
          >
            1
          </Link>
        )}
        {current >= 4 && (
          <div className={`${styles.number} ${styles.dots}`}>...</div>
        )}
        {current > 1 && (
          <Link
            to={`/${current - 1}${search}`}
            onClick={scrollToTopOfCardList}
            className={`${styles.number} ${styles.prev_num}`}
          >
            {current - 1}
          </Link>
        )}
        <div className={`${styles.number} ${styles.current}`}>{current}</div>
        {current < total && (
          <Link
            to={`/${current + 1}${search}`}
            onClick={scrollToTopOfCardList}
            className={`${styles.number} ${styles.next_num}`}
          >
            {current + 1}
          </Link>
        )}
        {current < total - 2 && (
          <div className={`${styles.number} ${styles.dots}`}>...</div>
        )}
        {current < total - 1 && (
          <Link
            to={`/${total}${search}`}
            onClick={scrollToTopOfCardList}
            className={`${styles.number} ${styles.last}`}
          >
            {total}
          </Link>
        )}
      </div>
      <div className={styles.block}>
        {current < total && (
          <Link
            to={`/${current + 1}${search}`}
            onClick={scrollToTopOfCardList}
            className={styles.next}
          >
            <img src={next} alt="Next" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventListPager;
