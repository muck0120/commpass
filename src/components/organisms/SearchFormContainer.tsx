import React, { FC, useState, useEffect, useMemo, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';

import SearchForm from 'components/organisms/SearchForm';
import { stringYear as y, stringMonth as m, stringDay as d } from 'app/date';
import { getConditionFromLocalStorage } from 'app/localStorage';

const SearchFormContainer: FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const paramPrefecture = params.get('prefecture');
  const paramOrderBy = params.get('orderBy');
  const paramLanguages = params.get('languages');
  const paramFrameworks = params.get('frameworks');
  const paramKeywords = params.get('keywords');
  const paramYm = params.get('ym');
  const paramYmd = params.get('ymd');

  const callLanguages = () =>
    paramLanguages ? paramLanguages.split(',') : ['all'];
  const callFrameworks = () =>
    paramFrameworks ? paramFrameworks.split(',') : ['all'];
  const callKeywords = () => (paramKeywords ? paramKeywords.split(',') : []);
  const callEventDateYm = () =>
    paramYm ? { y: paramYm.slice(0, 4), m: paramYm.slice(4, 6) } : { y, m };
  const callEventDateYmd = () =>
    paramYmd
      ? {
          y: paramYmd.slice(0, 4),
          m: paramYmd.slice(4, 6),
          d: paramYmd.slice(6, 8),
        }
      : { y, m, d };

  const initialState = {
    isOpen: true,
    prefecture: paramPrefecture || 'all',
    orderBy: paramOrderBy || '1',
    languages: useMemo(callLanguages, [paramLanguages]),
    frameworks: useMemo(callFrameworks, [paramFrameworks]),
    keywords: useMemo(callKeywords, [paramKeywords]),
    eventDateBy: paramYm ? 'ym' : paramYmd ? 'ymd' : 'all',
    eventDateYm: useMemo(callEventDateYm, [paramYm, y, m]),
    eventDateYmd: useMemo(callEventDateYmd, [paramYmd, y, m, d]),
    isRemember: ['remember'],
  };

  const [isOpen, setIsOpen] = useState(initialState.isOpen);
  const [prefecture, setPrefecture] = useState(initialState.prefecture);
  const [orderBy, setOrderBy] = useState(initialState.orderBy);
  const [languages, setLanguages] = useState(initialState.languages);
  const [frameworks, setFrameworks] = useState(initialState.frameworks);
  const [keywords, setKeywords] = useState<string[]>(initialState.keywords);
  const [eventDateBy, setEventDateBy] = useState(initialState.eventDateBy);
  const [eventDateYm, setEventDateYm] = useState(initialState.eventDateYm);
  const [eventDateYmd, setEventDateYmd] = useState(initialState.eventDateYmd);
  const [isRemember, setRemember] = useState(initialState.isRemember);

  useEffect(() => {
    setPrefecture(initialState.prefecture);
    setOrderBy(initialState.orderBy);
    setLanguages(initialState.languages);
    setFrameworks(initialState.frameworks);
    setEventDateBy(initialState.eventDateBy);
    setEventDateYm(initialState.eventDateYm);
    setEventDateYmd(initialState.eventDateYmd);
    setKeywords(initialState.keywords);
  }, [
    initialState.prefecture,
    initialState.orderBy,
    initialState.languages,
    initialState.frameworks,
    initialState.eventDateBy,
    initialState.eventDateYm,
    initialState.eventDateYmd,
    initialState.keywords,
  ]);

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

  const handleKeywords = (keyword: string) => {
    if (keyword) {
      setKeywords(keyword.split(/[\u{20}\u{3000}]/u));
    } else {
      setKeywords([]);
    }
  };

  const handleIsRemember = (value: string) => {
    setRemember(isRemember.length ? [] : [value]);
  };

  const setLocalStorageCondition = () => {
    const c = getConditionFromLocalStorage();
    setPrefecture(c.prefecture || 'all');
    setOrderBy(c.orderBy || '1');
    setLanguages(c.languages.length ? c.languages : ['all']);
    setFrameworks(c.frameworks.length ? c.frameworks : ['all']);
    setEventDateBy(c.eventDateBy || 'all');
    setEventDateYm({ y: c.eventDateYm.y || y, m: c.eventDateYm.m || m });
    setEventDateYmd({
      y: c.eventDateYmd.y || y,
      m: c.eventDateYmd.m || m,
      d: c.eventDateYmd.d || d,
    });
    setKeywords(c.keywords.length ? c.keywords : []);
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
      setKeywords={handleKeywords}
      isRemember={isRemember}
      setRemember={handleIsRemember}
      setLocalStorageCondition={setLocalStorageCondition}
    />
  );
};

export default SearchFormContainer;
