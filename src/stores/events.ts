import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Events, EventsResponse, STATUS, getEvents } from 'apis/connpassAPI';
import { AppThunk } from 'stores';

const initialState: EventsResponse = {
  data: {
    results_returned: 0,
    results_available: 0,
    results_start: 0,
    events: [],
  },
  status: STATUS.LOADING,
  error_msg: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    requestEvents: (state) => {
      state.status = STATUS.LOADING;
    },
    getEventsSuccess: (state, action: PayloadAction<Events>) => {
      state.data = action.payload;
      state.status = STATUS.SUCCESS;
      state.error_msg = null;
    },
    getEventsFailed: (state, action: PayloadAction<string>) => {
      state.status = STATUS.ERROR;
      state.error_msg = action.payload;
    },
  },
});

export const {
  requestEvents,
  getEventsSuccess,
  getEventsFailed,
} = eventsSlice.actions;

export default eventsSlice.reducer;

export const fetchEvents = (
  per: number,
  paged: number,
  queryString: string
): AppThunk => async (dispatch) => {
  dispatch(requestEvents());
  try {
    const events = await getEvents(per, paged, queryString);
    dispatch(getEventsSuccess(events));
  } catch (error) {
    dispatch(getEventsFailed(error.toString()));
  }
};
