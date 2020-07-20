import React, { FC } from 'react';

import styles from 'styles/components/molecules/SearchFormHeading.module.scss';

interface SearchFormHeading {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SearchFormHeading: FC<SearchFormHeading> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>検索条件</h2>
      <div
        className={`${styles.toggle} ${isOpen ? styles.open : styles.close}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onKeyPress={() => {
          setIsOpen(!isOpen);
        }}
        role="button"
        tabIndex={0}
      >
        {isOpen ? '閉じる' : '開く'}
      </div>
    </div>
  );
};

export default SearchFormHeading;
