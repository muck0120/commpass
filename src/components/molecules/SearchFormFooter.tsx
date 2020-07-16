import React, { FC, useState } from 'react';

import Checkbox from 'components/atoms/SearchFormCheck';
import styles from 'styles/components/molecules/SearchFormFooter.module.scss';

const SearchFormFooter: FC = () => {
  const [isRemember, setRemember] = useState(['remember']);
  return (
    <div className={styles.container}>
      <Checkbox
        name="remember"
        value="remember"
        label="この検索条件を保存する"
        checkedValues={isRemember}
        setValue={(value: string) =>
          setRemember(isRemember.length ? [] : [value])
        }
      />
      <div className={styles.button}>検索する</div>
    </div>
  );
};

export default SearchFormFooter;
