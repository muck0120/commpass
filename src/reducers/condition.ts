import { Reducer } from 'redux';

import { ConditionAction, ConditionActionType } from 'actions/condition';

export interface ConditionState {
  prefecture: string;
  orderBy: string;
  languages: string[];
  frameworks: string[];
  eventDateBy: string;
  eventDate: string;
  keywords: string[];
}

export const initialState: ConditionState = {
  prefecture: '',
  orderBy: '',
  languages: [],
  frameworks: [],
  eventDateBy: '',
  eventDate: '',
  keywords: [],
};

const prefReducer: Reducer<ConditionState, ConditionAction> = (
  state: ConditionState = initialState,
  action: ConditionAction
): ConditionState => {
  switch (action.type) {
    case ConditionActionType.SET_PREF:
      return {
        ...state,
        prefecture: action.prefecture,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;
      return state;
    }
  }
};

export default prefReducer;
