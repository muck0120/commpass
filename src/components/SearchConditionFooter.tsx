import React, { FC } from 'react';

import Checkbox from 'components/SearchConditionCheck';
import styles from 'styles/components/SearchConditionFooter.module.scss';

const SearchConditionFooter: FC = () => {
  return (
    <div className={styles.container}>
      <Checkbox
        name="remember"
        option={{ value: 'remember', label: 'この検索条件を保存する' }}
      />
      <div className={styles.button}>検索する</div>
    </div>
  );
};

export default SearchConditionFooter;
