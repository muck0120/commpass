import React, { FC, Dispatch } from 'react';

import Heading from 'components/molecules/SearchFormHeading';
import Select from 'components/atoms/SearchFormSelect';
import Checkbox from 'components/atoms/SearchFormCheck';
import EventDate from 'components/molecules/SearchFormEventDate';
import TextForm from 'components/atoms/SearchFormText';
import Footer from 'components/molecules/SearchFormFooter';
import styles from 'styles/components/organisms/SearchForm.module.scss';
import { Prefectures, OrderBy, Languages, Frameworks } from 'data/search-form';

interface SearchFormProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  prefecture: string;
  setPrefecture: Dispatch<string>;
  orderBy: string;
  setOrderBy: Dispatch<string>;
  languages: string[];
  setLanguages: (value: string) => void;
  frameworks: string[];
  setFrameworks: (value: string) => void;
  eventDateBy: string;
  setEventDateBy: Dispatch<string>;
  eventDateYm: { y: string; m: string };
  setEventDateYm: Dispatch<{ y: string; m: string }>;
  eventDateYmd: { y: string; m: string; d: string };
  setEventDateYmd: Dispatch<{ y: string; m: string; d: string }>;
  keywords: string[];
  setKeywords: Dispatch<string>;
  isRemember: string[];
  setRemember: (value: string) => void;
  setLocalStorageCondition: () => void;
}

const SearchForm: FC<SearchFormProps> = ({
  isOpen,
  setIsOpen,
  prefecture,
  setPrefecture,
  orderBy,
  setOrderBy,
  languages,
  setLanguages,
  frameworks,
  setFrameworks,
  eventDateBy,
  setEventDateBy,
  eventDateYm,
  setEventDateYm,
  eventDateYmd,
  setEventDateYmd,
  keywords,
  setKeywords,
  isRemember,
  setRemember,
  setLocalStorageCondition,
}) => {
  return (
    <>
      <div className={styles.container}>
        <Heading
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setLocalStorageCondition={setLocalStorageCondition}
        />
        <div
          className={`${styles.content} ${isOpen ? styles.open : styles.close}`}
        >
          <div className={styles.inner}>
            <div className={`${styles.group} ${styles.select}`}>
              <div className={styles.group_select_block}>
                <h3 className={styles.group_label}>都道府県</h3>
                <div className={`${styles.group_form} ${styles.select}`}>
                  <Select
                    options={Prefectures}
                    value={prefecture}
                    setValue={(value) => setPrefecture(value)}
                  />
                </div>
              </div>
              <div className={styles.group_select_block}>
                <h3 className={styles.group_label}>並び順</h3>
                <div className={`${styles.group_form} ${styles.select}`}>
                  <Select
                    options={OrderBy}
                    value={orderBy}
                    setValue={(value) => setOrderBy(value)}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.group} ${styles.check}`}>
              <h3 className={styles.group_label}>言語・技術</h3>
              <div className={`${styles.group_form} ${styles.check}`}>
                {Languages.map((Language) => (
                  <div key={Language.value} className={styles.check_wrapper}>
                    <Checkbox
                      name="languages"
                      value={Language.value}
                      label={Language.label}
                      checkedValues={languages}
                      setValue={(value) => setLanguages(value)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.group} ${styles.check}`}>
              <h3 className={styles.group_label}>フレームワーク</h3>
              <div className={`${styles.group_form} ${styles.check}`}>
                {Frameworks.map((Framework) => (
                  <div key={Framework.value} className={styles.check_wrapper}>
                    <Checkbox
                      name="frameworks"
                      value={Framework.value}
                      label={Framework.label}
                      checkedValues={frameworks}
                      setValue={(value) => setFrameworks(value)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.group} ${styles.radio}`}>
              <h3 className={styles.group_label}>開催日</h3>
              <div className={`${styles.group_form} ${styles.radio}`}>
                <EventDate
                  eventDateBy={eventDateBy}
                  setEventDateBy={setEventDateBy}
                  eventDateYm={eventDateYm}
                  setEventDateYm={setEventDateYm}
                  eventDateYmd={eventDateYmd}
                  setEventDateYmd={setEventDateYmd}
                />
              </div>
            </div>
            <div className={`${styles.group} ${styles.text}`}>
              <h3 className={styles.group_label}>キーワード</h3>
              <div className={`${styles.group_form} ${styles.text}`}>
                <TextForm
                  value={keywords.join(' ')}
                  placeholder="その他、検索したいキーワードを入力（スペース区切り）"
                  setValue={(value) => setKeywords(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer
          prefecture={prefecture}
          orderBy={orderBy}
          languages={languages}
          frameworks={frameworks}
          eventDateBy={eventDateBy}
          eventDateYm={eventDateYm}
          eventDateYmd={eventDateYmd}
          keywords={keywords}
          isRemember={isRemember}
          setRemember={setRemember}
        />
      </div>
    </>
  );
};

export default SearchForm;
