import { createSlice } from '@reduxjs/toolkit';

import { Event } from 'utils/interfaces';

const initialState: Event[] = [
  {
    id: 1,
    title:
      'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】1',
    catcher:
      'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
    date: '2020/7/15',
    address: '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
    owner: 'ForceTokyo',
    series: '実機ハンズオンat秋葉原',
    limit: 30,
    accepted: 15,
  },
  {
    id: 2,
    title:
      'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】2',
    catcher:
      'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
    date: '2020/7/15',
    address: '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
    owner: 'ForceTokyo',
    series: '実機ハンズオンat秋葉原',
    limit: 30,
    accepted: 15,
  },
  {
    id: 3,
    title:
      'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】3',
    catcher:
      'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
    date: '2020/7/15',
    address: '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
    owner: 'ForceTokyo',
    series: '実機ハンズオンat秋葉原',
    limit: 30,
    accepted: 15,
  },
  {
    id: 4,
    title:
      'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】4',
    catcher:
      'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
    date: '2020/7/15',
    address: '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
    owner: 'ForceTokyo',
    series: '実機ハンズオンat秋葉原',
    limit: 30,
    accepted: 15,
  },
  {
    id: 5,
    title:
      'ヒューマンネットワーク高専（HNK）月例会(2020年07月度)【ZOOM利用予定】5',
    catcher:
      'ジャンル問わず・もくもく作業・discordもくもく会・無言・途中退室可・参加者にリンクを送ります',
    date: '2020/7/15',
    address: '東京都千代田区神田須田町2丁目19-23（野村第3ビル4階）',
    owner: 'ForceTokyo',
    series: '実機ハンズオンat秋葉原',
    limit: 30,
    accepted: 15,
  },
];

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
