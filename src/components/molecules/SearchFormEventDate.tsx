import React, { FC } from 'react';

import { Condition } from 'utils/interfaces';
import RadioButton from 'components/atoms/SearchFormRadio';
import Select from 'components/atoms/SearchFormSelect';
import styles from 'styles/components/molecules/SearchFormEventDate.module.scss';
import { EventDate, Year, Month, Day } from 'data/search-form';

export interface ConditionProps {
  condition: Condition;
  setEventDateBy: (value: string) => void;
  setEventDateYmYear: (value: string) => void;
  setEventDateYmMonth: (value: string) => void;
  setEventDateYmdYear: (value: string) => void;
  setEventDateYmdMonth: (value: string) => void;
  setEventDateYmdDay: (value: string) => void;
}

const SearchFormEventDate: FC<ConditionProps> = ({
  condition,
  setEventDateBy,
  setEventDateYmYear,
  setEventDateYmMonth,
  setEventDateYmdYear,
  setEventDateYmdMonth,
  setEventDateYmdDay,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <RadioButton
          name="date"
          value={EventDate[0].value}
          label={EventDate[0].label}
          checked={EventDate[0].value === condition.eventDateBy}
          setValue={setEventDateBy}
        />
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton
            name="date"
            value={EventDate[1].value}
            label={EventDate[1].label}
            checked={EventDate[1].value === condition.eventDateBy}
            setValue={setEventDateBy}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={condition.eventDate.ym.year}
                disabled={condition.eventDateBy !== 'ym'}
                setValue={setEventDateYmYear}
              />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Month}
                value={condition.eventDate.ym.month}
                disabled={condition.eventDateBy !== 'ym'}
                setValue={setEventDateYmMonth}
              />
            </div>
            <div className={styles.unit}>月</div>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton
            name="date"
            value={EventDate[2].value}
            label={EventDate[2].label}
            checked={EventDate[2].value === condition.eventDateBy}
            setValue={setEventDateBy}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={condition.eventDate.ymd.year}
                disabled={condition.eventDateBy !== 'ymd'}
                setValue={setEventDateYmdYear}
              />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Month}
                value={condition.eventDate.ymd.month}
                disabled={condition.eventDateBy !== 'ymd'}
                setValue={setEventDateYmdMonth}
              />
            </div>
            <div className={styles.unit}>月</div>
          </div>
          <div className={`${styles.select_block} ${styles.day}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Day}
                value={condition.eventDate.ymd.day}
                disabled={condition.eventDateBy !== 'ymd'}
                setValue={setEventDateYmdDay}
              />
            </div>
            <div className={styles.unit}>日</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFormEventDate;
