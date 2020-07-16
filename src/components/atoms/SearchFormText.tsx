import React, { FC } from 'react';

import styles from 'styles/components/atoms/SearchFormText.module.scss';

interface TextProps {
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const SearchFormTextForm: FC<TextProps> = ({
  value,
  placeholder,
  setValue,
}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchFormTextForm;
