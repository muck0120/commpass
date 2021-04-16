import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Head from 'components/meta/Head';
import DefaultTemplate from 'components/templates/Default';
import styles from 'styles/components/pages/NotFound.module.scss';
import sad from 'images/commons/icon-sad.svg';

const NotFount: FC = () => {
  return (
    <DefaultTemplate>
      <Head
        title="お探しのページが見つかりません"
        description="ご指定のページは存在しないか、既に削除されているため見つかりません。"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <img src={sad} alt="" />
          <span>お探しのページが見つかりません</span>
        </h1>
        <Link to="/1" className={styles.button}>
          トップへ戻る
        </Link>
      </div>
    </DefaultTemplate>
  );
};

export default NotFount;
