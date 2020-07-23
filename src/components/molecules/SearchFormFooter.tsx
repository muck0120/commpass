import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import Checkbox from 'components/atoms/SearchFormCheck';
import styles from 'styles/components/molecules/SearchFormFooter.module.scss';
import { setConditionToLocalStorage } from 'app/localStorage';

interface SearchFormFooterProps {
  prefecture: string;
  orderBy: string;
  languages: string[];
  frameworks: string[];
  eventDateBy: string;
  eventDateYm: { y: string; m: string };
  eventDateYmd: { y: string; m: string; d: string };
  keywords: string[];
  isRemember: string[];
  setRemember: (value: string) => void;
}

const SearchFormFooter: FC<SearchFormFooterProps> = ({
  prefecture,
  orderBy,
  languages,
  frameworks,
  eventDateBy,
  eventDateYm,
  eventDateYmd,
  keywords,
  isRemember,
  setRemember,
}) => {
  const history = useHistory();

  const e = (value: string) => encodeURIComponent(value);

  const handleClick = () => {
    if (isRemember) {
      setConditionToLocalStorage({
        prefecture,
        orderBy,
        languages,
        frameworks,
        eventDateBy,
        eventDateYm: eventDateBy === 'ym' ? eventDateYm : { y: null, m: null },
        eventDateYmd:
          eventDateBy === 'ymd' ? eventDateYmd : { y: null, m: null, d: null },
        keywords,
      });
    }

    const params = [];
    if (orderBy !== '1') {
      params.push(`orderBy=${orderBy}`);
    }
    if (prefecture !== 'all') {
      params.push(`prefecture=${prefecture}`);
    }
    if (!languages.includes('all')) {
      languages = languages.map((language) => e(language));
      params.push(`languages=${languages.join(',')}`);
    }
    if (!frameworks.includes('all')) {
      frameworks = frameworks.map((framework) => e(framework));
      params.push(`frameworks=${frameworks.join(',')}`);
    }
    if (eventDateBy === 'ym') {
      const ym = eventDateYm.y + eventDateYm.m;
      params.push(`ym=${ym}`);
    }
    if (eventDateBy === 'ymd') {
      const ymd = eventDateYmd.y + eventDateYmd.m + eventDateYmd.d;
      params.push(`ymd=${ymd}`);
    }
    if (keywords.length !== 0) {
      keywords = keywords.map((keyword) => e(keyword));
      params.push(`keywords=${keywords.join(',')}`);
    }
    history.push(`?${params.join('&')}`);
  };

  return (
    <div className={styles.container}>
      <Checkbox
        name="remember"
        value="remember"
        label="この検索条件を保存する"
        checkedValues={isRemember}
        setValue={setRemember}
      />
      <button onClick={handleClick} type="button" className={styles.button}>
        検索する
      </button>
    </div>
  );
};

export default SearchFormFooter;
