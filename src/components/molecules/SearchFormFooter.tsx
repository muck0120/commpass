import React, { FC } from 'react';

import Checkbox from 'components/atoms/SearchFormCheck';

import styles from 'styles/components/molecules/SearchFormFooter.module.scss';

interface SearchFormFooterProps {
  isRemember: string[];
  setRemember: (value: string) => void;
}

const SearchFormFooter: FC<SearchFormFooterProps> = ({
  isRemember,
  setRemember,
}) => {
  return (
    <div className={styles.container}>
      <Checkbox
        name="remember"
        value="remember"
        label="この検索条件を保存する"
        checkedValues={isRemember}
        setValue={setRemember}
      />
      <div className={styles.button}>検索する</div>
    </div>
  );
};

export default SearchFormFooter;
