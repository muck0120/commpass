import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/components/molecules/EventListCard.module.scss';
import calendar from 'images/commons/icon-calendar.svg';
import map from 'images/commons/icon-map.svg';
import author from 'images/commons/icon-author.svg';

export interface EventProps {
  title?: string;
  catcher?: string;
  date?: string;
  address?: string;
  owner?: string;
  series?: string;
  limit?: number;
  accepted?: number;
}

const EventListCard: FC<EventProps> = ({
  title = 'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】',
  catcher = 'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
  date = '2020/7/15',
  address = '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
  owner = 'ForceTokyo',
  series = '実機ハンズオンat秋葉原',
  limit = 30,
  accepted = 15,
}) => {
  return (
    <Link to="/event" target="_blank" className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{catcher}</p>
      <hr className={styles.line} />
      <div className={styles.footer_top}>
        <time
          className={`${styles.date} ${styles.icon}`}
          style={{ backgroundImage: `url(${calendar})` }}
        >
          {date}
        </time>
        <address
          className={`${styles.address} ${styles.icon}`}
          style={{ backgroundImage: `url(${map})` }}
        >
          {address}
        </address>
      </div>
      <div className={styles.footer_bottom}>
        <cite className={styles.owner}>
          <span
            className={`${styles.author} ${styles.icon}`}
            style={{ backgroundImage: `url(${author})` }}
          >
            {owner}
          </span>
          <span className={styles.group}>（＠{series}）</span>
        </cite>
        <p className={styles.participant}>
          参加者：{accepted}/{limit}人
        </p>
      </div>
    </Link>
  );
};

export default EventListCard;
