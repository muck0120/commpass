import React, { FC } from 'react';

import Heading from 'components/SearchConditionHeading';

import styles from 'styles/components/SearchCondition.module.scss';

const SearchCondition: FC = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <div className={styles.content} />
    </div>
  );
};

export default SearchCondition;
