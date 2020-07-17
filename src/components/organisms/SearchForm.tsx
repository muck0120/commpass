import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Condition } from 'utils/interfaces';
import Heading from 'components/molecules/SearchFormHeading';
import Select from 'components/atoms/SearchFormSelect';
import Checkbox from 'components/atoms/SearchFormCheck';
import EventDate from 'components/molecules/SearchFormEventDate';
import TextForm from 'components/atoms/SearchFormText';
import Footer from 'components/molecules/SearchFormFooter';
import styles from 'styles/components/organisms/SearchForm.module.scss';
import { Prefectures, OrderBy, Languages, Frameworks } from 'data/search-form';
import {
  setPrefecture,
  setOrderBy,
  setLanguages,
  setFrameworks,
  setKeywords,
} from 'stores/condition';

interface ConditionState {
  condition: Condition;
}

const SearchForm: FC = () => {
  const condition = useSelector((state: ConditionState) => state.condition);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <Heading />
        <div className={styles.content}>
          <div className={`${styles.group} ${styles.select}`}>
            <div className={styles.group_select_block}>
              <h3 className={styles.group_label}>都道府県</h3>
              <div className={`${styles.group_form} ${styles.select}`}>
                <Select
                  options={Prefectures}
                  value={condition.prefecture}
                  setValue={(value) => dispatch(setPrefecture(value))}
                />
              </div>
            </div>
            <div className={styles.group_select_block}>
              <h3 className={styles.group_label}>並び順</h3>
              <div className={`${styles.group_form} ${styles.select}`}>
                <Select
                  options={OrderBy}
                  value={condition.orderBy}
                  setValue={(value) => dispatch(setOrderBy(value))}
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
                    checkedValues={condition.languages}
                    setValue={(value) => dispatch(setLanguages(value))}
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
                    checkedValues={condition.frameworks}
                    setValue={(value) => dispatch(setFrameworks(value))}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.group} ${styles.radio}`}>
            <h3 className={styles.group_label}>開催日</h3>
            <div className={`${styles.group_form} ${styles.radio}`}>
              <EventDate />
            </div>
          </div>
          <div className={`${styles.group} ${styles.text}`}>
            <h3 className={styles.group_label}>キーワード</h3>
            <div className={`${styles.group_form} ${styles.text}`}>
              <TextForm
                value={condition.keywords.join(' ')}
                placeholder="その他、検索したいキーワードを入力（スペース区切り）"
                setValue={(value) => dispatch(setKeywords(value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default SearchForm;
