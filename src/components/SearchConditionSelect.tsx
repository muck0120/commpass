import React, { FC } from 'react';

import styles from 'styles/components/SearchConditionSelect.module.scss';

interface OptionsProps {
  options: { value: string; label: string }[];
}

const SearchConditionSelect: FC<OptionsProps> = ({ options }) => {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        {options.map((option: { value: string; label: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchConditionSelect;
