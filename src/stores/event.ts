import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Event, EventResponse, STATUS, getEventById } from 'apis/connpassAPI';
import { AppThunk } from 'stores';

const initialState: EventResponse = {
  data: null,
  hasEvent: true,
  status: STATUS.SUCCESS,
  error_msg: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    requestEvent: (state) => {
      state.status = STATUS.LOADING;
    },
    getEventSuccess: (state, action: PayloadAction<Event>) => {
      if (action.payload) {
        state.data = action.payload;
      } else {
        state.hasEvent = false;
      }
      state.status = STATUS.SUCCESS;
      state.error_msg = null;
    },
    getEventFailed: (state, action: PayloadAction<string>) => {
      state.status = STATUS.ERROR;
      state.error_msg = action.payload;
    },
  },
});

export const {
  requestEvent,
  getEventSuccess,
  getEventFailed,
} = eventSlice.actions;

export default eventSlice.reducer;

export const fetchEvent = (eventId: number): AppThunk => async (dispatch) => {
  dispatch(requestEvent());
  try {
    const event = await getEventById(eventId);
    dispatch(getEventSuccess(event));
  } catch (error) {
    dispatch(getEventFailed(error.toString()));
  }
};
