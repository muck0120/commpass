import React, { FC } from 'react';

import RadioButton from 'components/atoms/SearchFormRadio';
import Select from 'components/atoms/SearchFormSelect';
import styles from 'styles/components/molecules/SearchFormEventDate.module.scss';
import { EventDate, Year, Month, Day } from 'data/search-form';

interface SearchFormEventDateProps {
  eventDateBy: string;
  setEventDateBy: (value: string) => void;
  eventDateYm: { y: string; m: string };
  setEventDateYm: (value: { y: string; m: string }) => void;
  eventDateYmd: { y: string; m: string; d: string };
  setEventDateYmd: (value: { y: string; m: string; d: string }) => void;
}

const SearchFormEventDate: FC<SearchFormEventDateProps> = ({
  eventDateBy,
  setEventDateBy,
  eventDateYm,
  setEventDateYm,
  eventDateYmd,
  setEventDateYmd,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <RadioButton
          name="date"
          value={EventDate[0].value}
          label={EventDate[0].label}
          checked={EventDate[0].value === eventDateBy}
          setValue={(value) => setEventDateBy(value)}
        />
      </div>
      <div className={styles.group}>
        <div className={styles.radio}>
          <RadioButton
            name="date"
            value={EventDate[1].value}
            label={EventDate[1].label}
            checked={EventDate[1].value === eventDateBy}
            setValue={(value) => setEventDateBy(value)}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={eventDateYm.y}
                disabled={eventDateBy !== 'ym'}
                setValue={(value) =>
                  setEventDateYm({ y: value, m: eventDateYm.m })
                }
              />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Month}
                value={eventDateYm.m}
                disabled={eventDateBy !== 'ym'}
                setValue={(value) =>
                  setEventDateYm({ y: eventDateYm.y, m: value })
                }
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
            checked={EventDate[2].value === eventDateBy}
            setValue={(value) => setEventDateBy(value)}
          />
        </div>
        <div className={styles.select}>
          <div className={`${styles.select_block} ${styles.year}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Year}
                value={eventDateYmd.y}
                disabled={eventDateBy !== 'ymd'}
                setValue={(value) =>
                  setEventDateYmd({
                    y: value,
                    m: eventDateYmd.m,
                    d: eventDateYmd.d,
                  })
                }
              />
            </div>
            <div className={styles.unit}>年</div>
          </div>
          <div className={`${styles.select_block} ${styles.month}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Month}
                value={eventDateYmd.m}
                disabled={eventDateBy !== 'ymd'}
                setValue={(value) =>
                  setEventDateYmd({
                    y: eventDateYmd.y,
                    m: value,
                    d: eventDateYmd.d,
                  })
                }
              />
            </div>
            <div className={styles.unit}>月</div>
          </div>
          <div className={`${styles.select_block} ${styles.day}`}>
            <div className={styles.form_wrap}>
              <Select
                options={Day}
                value={eventDateYmd.d}
                disabled={eventDateBy !== 'ymd'}
                setValue={(value) =>
                  setEventDateYmd({
                    y: eventDateYmd.y,
                    m: eventDateYmd.m,
                    d: value,
                  })
                }
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
