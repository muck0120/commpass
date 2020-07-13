import React, { FC } from 'react';

import styles from 'styles/components/molecules/EventListPager.module.scss';
import prev from 'images/components/EventListPager/pager-prev.svg';
import next from 'images/components/EventListPager/pager-next.svg';

const EventListPager: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.prev}>
        <img src={prev} alt="Prev" />
      </div>
      <div className={styles.numbers}>
        <div className={`${styles.number} ${styles.first}`}>1</div>
        <div className={`${styles.number} ${styles.dots}`}>...</div>
        <div className={`${styles.number} ${styles.prev_num}`}>6</div>
        <div className={`${styles.number} ${styles.current}`}>7</div>
        <div className={`${styles.number} ${styles.next_num}`}>8</div>
        <div className={`${styles.number} ${styles.dots}`}>...</div>
        <div className={`${styles.number} ${styles.last}`}>15</div>
      </div>
      <div className={styles.next}>
        <img src={next} alt="Next" />
      </div>
    </div>
  );
};

export default EventListPager;
