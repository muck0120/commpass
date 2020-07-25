import axios from 'axios';

import { getDefaultTermQuery } from 'app/date';

export enum STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

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
  status: STATUS;
  error_msg: string | null;
}
/* eslint-enable */

export const getEvents = async (queryString: string): Promise<Events> => {
  const prevParams = new URLSearchParams(queryString);
  const nextParams = new URLSearchParams();

  const count = '20';
  const prefecture = prevParams.get('prefecture');
  const orderBy = prevParams.get('orderBy');
  const languages = prevParams.get('languages');
  const frameworks = prevParams.get('frameworks');
  const ym = prevParams.get('ym');
  const ymd = prevParams.get('ymd');
  const keywords = prevParams.get('keywords');

  const keyword = [];
  if (prefecture) keyword.push(prefecture);
  if (keywords) keyword.push(keywords);

  const keywordOr = [];
  if (languages) keywordOr.push(languages);
  if (frameworks) keywordOr.push(frameworks);

  if (count) nextParams.append('count', count);
  if (keyword.length > 0) nextParams.append('keyword', keyword.join(','));
  if (keywordOr.length > 0)
    nextParams.append('keyword_or', keywordOr.join(','));
  if (orderBy) nextParams.append('order', orderBy);
  if (ym) nextParams.append('ym', ym);
  if (ymd) nextParams.append('ymd', ymd);

  if (!ym && !ymd) nextParams.append('ym', getDefaultTermQuery());

  const url = `/api?${nextParams.toString()}`;
  return JSON.parse((await axios.get<string>(url)).data);
};
