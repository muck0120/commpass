import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/components/ArticleCard.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';

const ArticleCard: FC = () => {
  return (
    <Link to="/event" target="_blank" className={styles.container}>
      <h3 className={styles.title}>
        ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】
      </h3>
      <p className={styles.description}>
        ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります
      </p>
      <hr className={styles.line} />
      <div className={styles.footer_top}>
        <time
          className={`${styles.date} ${styles.icon}`}
          style={{ backgroundImage: `url(${calendar})` }}
        >
          2020/7/15
        </time>
        <address
          className={`${styles.address} ${styles.icon}`}
          style={{ backgroundImage: `url(${map})` }}
        >
          東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）
        </address>
      </div>
      <div className={styles.footer_bottom}>
        <cite className={styles.owner}>
          <span
            className={`${styles.author} ${styles.icon}`}
            style={{ backgroundImage: `url(${author})` }}
          >
            ForceTokyo
          </span>
          <span className={styles.group}>（＠実機ハンズオンat秋葉原）</span>
        </cite>
        <p className={styles.participant}>参加者：15/30人</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
