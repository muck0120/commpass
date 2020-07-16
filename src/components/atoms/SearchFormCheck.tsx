import React, { FC } from 'react';

import styles from 'styles/components/atoms/SearchFormCheck.module.scss';

interface CheckboxProps {
  name: string;
  value: string;
  label: string;
  checkedValues: string[];
  setValue: (value: string) => void;
}

const SearchFormSelect: FC<CheckboxProps> = ({
  name,
  value,
  label,
  checkedValues,
  setValue,
}) => {
  return (
    <label htmlFor={`${name}_${value}`} className={styles.wrapper}>
      <input
        type="checkbox"
        value={value}
        checked={checkedValues.includes(value)}
        onChange={(e) => setValue(e.target.value)}
        id={`${name}_${value}`}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default SearchFormSelect;
