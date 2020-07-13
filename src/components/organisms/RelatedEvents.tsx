import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/components/organisms/RelatedEvents.module.scss';
import calendar from 'images/commons/icon-calendar.svg';

const RelatedEvents: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>関連イベント</h3>
      <div className={styles.content}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Link to="/event" key={index} className={styles.post}>
            <h4 className={styles.title}>
              ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】
            </h4>
            <div className={styles.foot}>
              <time
                className={styles.date}
                style={{ backgroundImage: `url(${calendar})` }}
              >
                2020/7/15
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedEvents;
