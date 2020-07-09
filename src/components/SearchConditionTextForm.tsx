import React, { FC } from 'react';

import styles from 'styles/components/SearchConditionTextForm.module.scss';

const SearchConditionTextForm: FC = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="その他、検索したいキーワードを入力（スペース区切り）"
      />
    </div>
  );
};

export default SearchConditionTextForm;
