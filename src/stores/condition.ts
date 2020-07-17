import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Condition } from 'utils/interfaces';

const today = new Date();

const initialState: Condition = {
  prefecture: 'all',
  orderBy: '1',
  languages: ['all'],
  frameworks: ['all'],
  eventDateBy: 'all',
  eventDate: {
    ym: {
      year: today.getFullYear().toString(),
      month: `0${(today.getMonth() + 1).toString()}`.slice(-2),
    },
    ymd: {
      year: today.getFullYear().toString(),
      month: `0${(today.getMonth() + 1).toString()}`.slice(-2),
      day: `0${today.getDate().toString()}`.slice(-2),
    },
  },
  keywords: [],
};

const setTechnology = (
  state: Condition,
  action: PayloadAction<string>,
  name: 'languages' | 'frameworks'
) => {
  const value = action.payload;

  if (value === 'all') {
    return { ...state, [name]: ['all'] };
  }

  let values = [...state[name]].filter((el) => el !== 'all');

  if (values.includes(value)) {
    values = values.filter((el) => el !== value);
  } else {
    values.push(value);
  }

  if (values.length <= 0) {
    values.push('all');
  }

  return { ...state, [name]: values };
};

const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setPrefecture: (state, action: PayloadAction<string>) => {
      const draft = state;
      draft.prefecture = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      const draft = state;
      draft.orderBy = action.payload;
    },
    setLanguages: (state, action: PayloadAction<string>) =>
      setTechnology(state, action, 'languages'),
    setFrameworks: (state, action: PayloadAction<string>) =>
      setTechnology(state, action, 'frameworks'),
    setEventDateBy: (state, action: PayloadAction<string>) => ({
      ...state,
      eventDateBy: action.payload,
    }),
    setEventDateYmYear: (state, action: PayloadAction<string>) => {
      const eventDate = { ...state.eventDate };
      eventDate.ym.year = action.payload;
    },
    setEventDateYmMonth: (state, action: PayloadAction<string>) => {
      const eventDate = { ...state.eventDate };
      eventDate.ym.month = action.payload;
    },
    setEventDateYmdYear: (state, action: PayloadAction<string>) => {
      const eventDate = { ...state.eventDate };
      eventDate.ymd.year = action.payload;
    },
    setEventDateYmdMonth: (state, action: PayloadAction<string>) => {
      const eventDate = { ...state.eventDate };
      eventDate.ymd.month = action.payload;
    },
    setEventDateYmdDay: (state, action: PayloadAction<string>) => {
      const eventDate = { ...state.eventDate };
      eventDate.ymd.day = action.payload;
    },
    setKeywords: (state, action: PayloadAction<string>) => {
      const draft = state;
      draft.keywords = action.payload.split(/[\u{20}\u{3000}]/u);
    },
  },
});

export const {
  setPrefecture,
  setOrderBy,
  setLanguages,
  setFrameworks,
  setEventDateBy,
  setEventDateYmYear,
  setEventDateYmMonth,
  setEventDateYmdYear,
  setEventDateYmdMonth,
  setEventDateYmdDay,
  setKeywords,
} = conditionSlice.actions;

export default conditionSlice.reducer;
