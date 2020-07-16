import { Reducer } from 'redux';

import { Condition } from 'utils/interfaces';
import { ConditionAction, ConditionActionType } from 'actions/condition';

const today = new Date();

export const initialState: Condition = {
  prefecture: 'all',
  orderBy: '1',
  languages: ['all'],
  frameworks: ['all'],
  eventDateBy: 'all',
  eventDate: {
    ym: {
      year: today.getFullYear().toString(),
      month: `0${(today.getMonth() + 1).toString()}`.slice(-2),
    },
    ymd: {
      year: today.getFullYear().toString(),
      month: `0${(today.getMonth() + 1).toString()}`.slice(-2),
      day: `0${today.getDate().toString()}`.slice(-2),
    },
  },
  keywords: [],
};

const conditionReducer: Reducer<Condition, ConditionAction> = (
  state: Condition = initialState,
  action: ConditionAction
): Condition => {
  switch (action.type) {
    case ConditionActionType.SET_PREFECTURE: {
      return { ...state, prefecture: action.payload };
    }
    case ConditionActionType.SET_ORDERBY: {
      return { ...state, orderBy: action.payload };
    }
    case ConditionActionType.SET_LANGUAGES:
    case ConditionActionType.SET_FRAMEWORKS: {
      const name =
        action.type === ConditionActionType.SET_LANGUAGES
          ? 'languages'
          : 'frameworks';
      const value = action.payload;

      if (value === 'all') {
        return { ...state, [name]: ['all'] };
      }

      let values = [...state[name]].filter((el) => el !== 'all');

      if (values.includes(value)) {
        values = values.filter((el) => el !== value);
      } else {
        values.push(value);
      }

      if (values.length <= 0) {
        values.push('all');
      }

      return { ...state, [name]: values };
    }
    case ConditionActionType.SET_EVENTDATE_BY: {
      return { ...state, eventDateBy: action.payload };
    }
    case ConditionActionType.SET_EVENTDATE_YM_YEAR:
    case ConditionActionType.SET_EVENTDATE_YM_MONTH:
    case ConditionActionType.SET_EVENTDATE_YMD_YEAR:
    case ConditionActionType.SET_EVENTDATE_YMD_MONTH:
    case ConditionActionType.SET_EVENTDATE_YMD_DAY: {
      const eventDate = { ...state.eventDate };
      switch (action.type) {
        case ConditionActionType.SET_EVENTDATE_YM_YEAR:
          eventDate.ym.year = action.payload;
          break;
        case ConditionActionType.SET_EVENTDATE_YM_MONTH:
          eventDate.ym.month = action.payload;
          break;
        case ConditionActionType.SET_EVENTDATE_YMD_YEAR:
          eventDate.ymd.year = action.payload;
          break;
        case ConditionActionType.SET_EVENTDATE_YMD_MONTH:
          eventDate.ymd.month = action.payload;
          break;
        case ConditionActionType.SET_EVENTDATE_YMD_DAY:
          eventDate.ymd.day = action.payload;
          break;
        default: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const _: never = action.type;
          break;
        }
      }
      return {
        ...state,
        eventDate,
      };
    }
    case ConditionActionType.SET_KEYWORDS: {
      const keywords = action.payload.split(/[\u{20}\u{3000}]/u);
      return { ...state, keywords };
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;
      return state;
    }
  }
};

export default conditionReducer;
