import React, { FC } from 'react';

import styles from 'styles/components/EventDetailHeader.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';
import link from 'images/commons/icon-link.svg';

const EventDetailHeader: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】
      </h2>
      <div className={styles.content}>
        <p className={styles.description}>
          ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります
        </p>
        <hr className={styles.line} />
        <div className={styles.datetime}>
          <time
            className={`${styles.date} ${styles.icon}`}
            style={{ backgroundImage: `url(${calendar})` }}
          >
            2020/7/15
          </time>
          <time className={styles.time}>10:00 ~ 11:00</time>
        </div>
        <address
          className={`${styles.address} ${styles.icon}`}
          style={{ backgroundImage: `url(${map})` }}
        >
          東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）
        </address>
        <div className={styles.bottom}>
          <cite className={styles.owner}>
            <span
              className={`${styles.author} ${styles.icon}`}
              style={{ backgroundImage: `url(${author})` }}
            >
              ForceTokyo
            </span>
            <span className={styles.group}>
              （＠
              <a
                href="https://connpass.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${link})` }}
              >
                実機ハンズオンat秋葉原
              </a>
              ）
            </span>
          </cite>
          <p className={styles.participant}>参加者：15/30人</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailHeader;
