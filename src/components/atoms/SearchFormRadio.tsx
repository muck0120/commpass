import React, { FC } from 'react';

import styles from 'styles/components/atoms/SearchFormRadio.module.scss';

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  setValue: (value: string) => void;
}

const SearchFormSelect: FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  setValue,
}) => {
  return (
    <label htmlFor={`${name}_${value}`} className={styles.wrapper}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        id={`${name}_${value}`}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default SearchFormSelect;
