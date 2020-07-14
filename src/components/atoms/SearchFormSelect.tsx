import React, { FC } from 'react';

import styles from 'styles/components/atoms/SearchFormSelect.module.scss';

interface OptionsProps {
  options: { value: string; label: string }[];
  value?: string;
  setValue?: (value: string) => void;
}

const SearchFormSelect: FC<OptionsProps> = ({
  options,
  value,
  setValue = () => undefined,
}) => (
  <div className={styles.wrapper}>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.select}
    >
      {options.map((option: { value: string; label: string }) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SearchFormSelect;
