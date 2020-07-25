import { combineReducers } from 'redux';
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import eventsReducer from 'stores/events';

const rootReducer = combineReducers({
  events: eventsReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;