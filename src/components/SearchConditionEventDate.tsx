import React, { FC } from 'react';

import RadioButton from 'components/SearchConditionRadio';
import Select from 'components/SearchConditionSelect';
import styles from 'styles/components/SearchConditionEventDate.module.scss';
import { EventDate, Year, Month, Day } from 'data/search-condition';

const SearchConditionSelect: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <RadioButton name="date" option={EventDate[0]} />
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton name="date" option={EventDate[1]} />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select options={Year} />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select options={Month} />
            </div>
            <div className={styles.unit}>月</div>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton name="date" option={EventDate[2]} />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select options={Year} />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select options={Month} />
            </div>
            <div className={styles.unit}>月</div>
          </div>
          <div className={`${styles.select_block} ${styles.day}`}>
            <div className={styles.form_wrap}>
              <Select options={Day} />
            </div>
            <div className={styles.unit}>日</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchConditionSelect;
