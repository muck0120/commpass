import React, { FC, useState, Dispatch } from 'react';

import SearchForm from 'components/organisms/SearchForm';

const SearchFormContainer: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [prefecture, setPrefecture] = useState('all');
  const [orderBy, setOrderBy] = useState('1');
  const [languages, setLanguages] = useState(['all']);
  const [frameworks, setFrameworks] = useState(['all']);
  const [keywords, setKeywords] = useState(['']);
  const [eventDateBy, setEventDateBy] = useState('all');
  const [eventDateYm, setEventDateYm] = useState({
    y: new Date().getFullYear().toString(),
    m: `0${(new Date().getMonth() + 1).toString()}`.slice(-2),
  });
  const [eventDateYmd, setEventDateYmd] = useState({
    y: new Date().getFullYear().toString(),
    m: `0${(new Date().getMonth() + 1).toString()}`.slice(-2),
    d: `0${new Date().getDate().toString()}`.slice(-2),
  });
  const [isRemember, setRemember] = useState(['remember']);

  const handleCheckboxes = (
    setState: Dispatch<string[]>,
    prevValues: string[],
    value: string
  ) => {
    if (value === 'all') {
      setState(['all']);
      return;
    }

    let nextValues = [...prevValues].filter((el) => el !== 'all');
    if (nextValues.includes(value)) {
      nextValues = nextValues.filter((el) => el !== value);
    } else {
      nextValues.push(value);
    }

    if (nextValues.length <= 0) {
      nextValues.push('all');
    }

    setState(nextValues);
  };

  const handleLanguages = (language: string) => {
    handleCheckboxes(setLanguages, languages, language);
  };

  const handleFrameworks = (framework: string) => {
    handleCheckboxes(setFrameworks, frameworks, framework);
  };

  const handleRemember = (value: string) => {
    setRemember(isRemember.length ? [] : [value]);
  };

  return (
    <SearchForm
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      prefecture={prefecture}
      setPrefecture={setPrefecture}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      languages={languages}
      setLanguages={handleLanguages}
      frameworks={frameworks}
      setFrameworks={handleFrameworks}
      eventDateBy={eventDateBy}
      setEventDateBy={setEventDateBy}
      eventDateYm={eventDateYm}
      setEventDateYm={setEventDateYm}
      eventDateYmd={eventDateYmd}
      setEventDateYmd={setEventDateYmd}
      keywords={keywords}
      setKeywords={setKeywords}
      isRemember={isRemember}
      setRemember={handleRemember}
    />
  );
};

export default SearchFormContainer;
