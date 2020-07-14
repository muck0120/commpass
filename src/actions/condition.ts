export enum ConditionActionType {
  SET_PREF = 'CONDITION/SET',
}

export interface ConditionAction {
  type: ConditionActionType;
  prefecture: string;
}

export const setPrefecture = (prefecture: string): ConditionAction => ({
  type: ConditionActionType.SET_PREF,
  prefecture,
});
