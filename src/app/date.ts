const today = new Date();
const y = today.getFullYear();
const m = today.getMonth() + 1;
const d = today.getDate();

export const stringYear = y.toString();
export const stringMonth = `0${m.toString()}`.slice(-2);
export const stringDay = `0${d.toString()}`.slice(-2);

export const getDefaultTermQuery = (): string => {
  let month = m;
  let year = y;
  const terms: string[] = [];
  for (let i = 0; i < 12; i += 1) {
    terms.push(year.toString() + `0${month.toString()}`.slice(-2));
    if (month === 12) {
      [year, month] = [year + 1, 1];
    } else {
      month += 1;
    }
  }
  return terms.join(',');
};

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
