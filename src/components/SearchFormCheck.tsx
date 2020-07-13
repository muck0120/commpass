import React, { FC } from 'react';

import styles from 'styles/components/SearchFormCheck.module.scss';

interface CheckboxProps {
  name: string;
  option: { value: string; label: string };
}

const SearchFormSelect: FC<CheckboxProps> = ({ name, option }) => {
  return (
    <label htmlFor={`${name}_${option.value}`} className={styles.wrapper}>
      <input
        type="checkbox"
        value={option.value}
        id={`${name}_${option.value}`}
      />
      <span className={styles.label}>{option.label}</span>
    </label>
  );
};

export default SearchFormSelect;
