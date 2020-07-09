import React, { FC } from 'react';

import styles from 'styles/components/SearchConditionRadio.module.scss';

interface RadioButtonProps {
  name: string;
  option: { value: string; label: string };
}

const SearchConditionSelect: FC<RadioButtonProps> = ({ name, option }) => {
  return (
    <label htmlFor={`${name}_${option.value}`} className={styles.wrapper}>
      <input
        type="radio"
        name={name}
        value={option.value}
        id={`${name}_${option.value}`}
      />
      <span className={styles.label}>{option.label}</span>
    </label>
  );
};

export default SearchConditionSelect;
