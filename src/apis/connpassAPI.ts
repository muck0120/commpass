import axios from 'axios';

/* eslint-disable camelcase */
export interface Event {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  hash_tag: string;
  started_at: string;
  ended_at: string;
  limit: number;
  event_type: 'participation' | 'advertisement';
  series: {
    id: number;
    title: string;
    url: string;
  };
  address: string;
  place: string;
  lat: number;
  lon: number;
  owner_id: number;
  owner_nickname: string;
  owner_display_name: string;
  accepted: number;
  waiting: number;
  updated_at: string;
}

export interface Events {
  results_returned: number;
  results_available: number;
  results_start: number;
  events: Event[];
}

export interface EventsResponse {
  data: Events;
  status: 'success' | 'error';
  error_msg: string | null;
}
/* eslint-enable */

export const getEvents = async (): Promise<Events> => {
  const url = '/api?count=10';
  return JSON.parse((await axios.get<string>(url)).data);
};
