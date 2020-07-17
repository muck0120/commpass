export interface Condition {
  prefecture: string;
  orderBy: string;
  languages: string[];
  frameworks: string[];
  eventDateBy: string;
  eventDate: {
    ym: { year: string; month: string };
    ymd: { year: string; month: string; day: string };
  };
  keywords: string[];
}

export interface Event {
  id: number;
  title: string;
  catcher: string;
  date: string;
  address: string;
  owner: string;
  series: string;
  limit: number;
  accepted: number;
}
