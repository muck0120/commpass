import { combineReducers } from 'redux';
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import eventsReducer from 'stores/events';
import eventReducer from 'stores/event';

const rootReducer = combineReducers({
  events: eventsReducer,
  event: eventReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
