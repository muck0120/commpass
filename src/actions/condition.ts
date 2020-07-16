export enum ConditionActionType {
  SET_PREFECTURE = 'CONDITION/SET_PREFECTURE',
  SET_ORDERBY = 'CONDITION/SET_ORDERBY',
  SET_LANGUAGES = 'CONDITION/SET_LANGUAGES',
  SET_FRAMEWORKS = 'CONDITION/SET_FRAMEWORKS',
  SET_EVENTDATE_BY = 'CONDITION/SET_EVENTDATE_BY',
  SET_EVENTDATE_YM_YEAR = 'CONDITION/SET_EVENTDATE_YM_YEAR',
  SET_EVENTDATE_YM_MONTH = 'CONDITION/SET_EVENTDATE_YM_MONTH',
  SET_EVENTDATE_YMD_YEAR = 'CONDITION/SET_EVENTDATE_YMD_YEAR',
  SET_EVENTDATE_YMD_MONTH = 'CONDITION/SET_EVENTDATE_YMD_MONTH',
  SET_EVENTDATE_YMD_DAY = 'CONDITION/SET_EVENTDATE_YMD_DAY',
  SET_KEYWORDS = 'CONDITION/SET_KEYWORDS',
}

export interface ConditionAction {
  type: ConditionActionType;
  payload: string;
}

export const setPrefecture = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_PREFECTURE,
  payload,
});

export const setOrderBy = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_ORDERBY,
  payload,
});

export const setLanguages = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_LANGUAGES,
  payload,
});

export const setFrameworks = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_FRAMEWORKS,
  payload,
});

export const setEventDateBy = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_BY,
  payload,
});

export const setEventDateYmYear = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_YM_YEAR,
  payload,
});

export const setEventDateYmMonth = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_YM_MONTH,
  payload,
});

export const setEventDateYmdYear = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_YMD_YEAR,
  payload,
});

export const setEventDateYmdMonth = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_YMD_MONTH,
  payload,
});

export const setEventDateYmdDay = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_EVENTDATE_YMD_DAY,
  payload,
});

export const setKeywords = (payload: string): ConditionAction => ({
  type: ConditionActionType.SET_KEYWORDS,
  payload,
});
