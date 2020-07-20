import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Events, EventsResponse, getEvents } from 'apis/connpassAPI';
import { AppThunk } from 'stores';

const initialState: EventsResponse = {
  data: {
    results_returned: 0,
    results_available: 0,
    results_start: 0,
    events: [],
  },
  status: 'success',
  error_msg: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    getEventsSuccess: (state, action: PayloadAction<Events>) => {
      state.data = action.payload;
      state.status = 'success';
      state.error_msg = null;
    },
    getEventsFailed: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.error_msg = action.payload;
    },
  },
});

export const { getEventsSuccess, getEventsFailed } = eventsSlice.actions;

export default eventsSlice.reducer;

export const fetchEvents = (): AppThunk => async (dispatch) => {
  try {
    const events = await getEvents();
    dispatch(getEventsSuccess(events));
  } catch (error) {
    dispatch(getEventsFailed(error.toString()));
  }
};
