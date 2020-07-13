import React, { FC } from 'react';

import styles from 'styles/components/molecules/SearchFormHeading.module.scss';

const SearchFormHeading: FC = () => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>検索条件</h2>
      <div className={styles.toggle}>閉じる</div>
    </div>
  );
};

export default SearchFormHeading;
