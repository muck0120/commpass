import React, { FC } from 'react';

import styles from 'styles/components/molecules/SearchFormHeading.module.scss';
import { isConditionInLocalStorage } from 'app/localStorage';

interface SearchFormHeading {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setLocalStorageCondition: () => void;
}

const SearchFormHeading: FC<SearchFormHeading> = ({
  isOpen,
  setIsOpen,
  setLocalStorageCondition,
}) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>検索条件</h2>
      {isConditionInLocalStorage() && (
        <button
          type="button"
          onClick={setLocalStorageCondition}
          className={styles.storage}
        >
          保存した条件
        </button>
      )}
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
