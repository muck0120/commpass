import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import conditionReducer from 'stores/condition';
import eventsReducer from 'stores/events';

const reducer = combineReducers({
  condition: conditionReducer,
  events: eventsReducer,
});

const store = configureStore({ reducer });

export default store;
