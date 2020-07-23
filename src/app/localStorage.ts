enum Key {
  CONDITION = 'CONDITION',
}

interface ConditionLocalStorage {
  prefecture: string | null;
  orderBy: string | null;
  languages: string[];
  frameworks: string[];
  eventDateBy: string | null;
  eventDateYm: { y: string | null; m: string | null };
  eventDateYmd: { y: string | null; m: string | null; d: string | null };
  keywords: string[];
}

export const isConditionInLocalStorage = (): boolean => {
  return Boolean(localStorage.getItem(Key.CONDITION));
};

export const getConditionFromLocalStorage = (): ConditionLocalStorage => {
  const conditionJson = localStorage.getItem(Key.CONDITION);
  return conditionJson
    ? JSON.parse(conditionJson)
    : {
        prefecture: null,
        orderBy: null,
        languages: [],
        frameworks: [],
        eventDateBy: null,
        eventDateYm: { y: null, m: null },
        eventDateYmd: { y: null, m: null, d: null },
        keywords: [],
      };
};

export const setConditionToLocalStorage = (
  condition: ConditionLocalStorage
): void => {
  localStorage.setItem(Key.CONDITION, JSON.stringify(condition));
};
