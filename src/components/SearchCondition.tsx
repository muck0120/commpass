import React, { FC } from 'react';

import Heading from 'components/SearchConditionHeading';
import Select from 'components/SearchConditionSelect';
import Checkbox from 'components/SearchConditionCheck';
import EventDate from 'components/SearchConditionEventDate';
import TextForm from 'components/SearchConditionTextForm';
import Footer from 'components/SearchConditionFooter';
import styles from 'styles/components/SearchCondition.module.scss';
import {
  Prefectures,
  OrderBy,
  Languages,
  Frameworks,
} from 'data/search-condition';

const SearchCondition: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Heading />
        <div className={styles.content}>
          <div className={`${styles.group} ${styles.select}`}>
            <div className={styles.group_select_block}>
              <h3 className={styles.group_label}>都道府県</h3>
              <div className={`${styles.group_form} ${styles.select}`}>
                <Select options={Prefectures} />
              </div>
            </div>
            <div className={styles.group_select_block}>
              <h3 className={styles.group_label}>並び順</h3>
              <div className={`${styles.group_form} ${styles.select}`}>
                <Select options={OrderBy} />
              </div>
            </div>
          </div>
          <div className={`${styles.group} ${styles.check}`}>
            <h3 className={styles.group_label}>言語・技術</h3>
            <div className={`${styles.group_form} ${styles.check}`}>
              {Languages.map((Language) => (
                <div key={Language.value} className={styles.check_wrapper}>
                  <Checkbox name="languages" option={Language} />
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.group} ${styles.check}`}>
            <h3 className={styles.group_label}>フレームワーク</h3>
            <div className={`${styles.group_form} ${styles.check}`}>
              {Frameworks.map((Framework) => (
                <div key={Framework.value} className={styles.check_wrapper}>
                  <Checkbox name="frameworks" option={Framework} />
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
              <TextForm />
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

export default SearchCondition;
