import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'stores';
import RadioButton from 'components/atoms/SearchFormRadio';
import Select from 'components/atoms/SearchFormSelect';
import styles from 'styles/components/molecules/SearchFormEventDate.module.scss';
import { EventDate, Year, Month, Day } from 'data/search-form';
import {
  setEventDateBy,
  setEventDateYmYear,
  setEventDateYmMonth,
  setEventDateYmdYear,
  setEventDateYmdMonth,
  setEventDateYmdDay,
} from 'stores/condition';

const SearchFormEventDate: FC = () => {
  const condition = useSelector((state: RootState) => state.condition);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <RadioButton
          name="date"
          value={EventDate[0].value}
          label={EventDate[0].label}
          checked={EventDate[0].value === condition.eventDateBy}
          setValue={(value) => dispatch(setEventDateBy(value))}
        />
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton
            name="date"
            value={EventDate[1].value}
            label={EventDate[1].label}
            checked={EventDate[1].value === condition.eventDateBy}
            setValue={(value) => dispatch(setEventDateBy(value))}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={condition.eventDate.ym.year}
                disabled={condition.eventDateBy !== 'ym'}
                setValue={(value) => dispatch(setEventDateYmYear(value))}
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
                setValue={(value) => dispatch(setEventDateYmMonth(value))}
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
            setValue={(value) => dispatch(setEventDateBy(value))}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={condition.eventDate.ymd.year}
                disabled={condition.eventDateBy !== 'ymd'}
                setValue={(value) => dispatch(setEventDateYmdYear(value))}
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
                setValue={(value) => dispatch(setEventDateYmdMonth(value))}
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
                setValue={(value) => dispatch(setEventDateYmdDay(value))}
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
