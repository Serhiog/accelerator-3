export const prettify = (num) => {
  let n = num.toString();
  const result = n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `);
  return result + ` рублей`;
};

export const prettifyYears = (year) => {
  return year + ` лет`;
};

export const delSpaces = (str) => {
  str = str.replace(/\s/g, ``);
  return str;
};

export const setOnlyNums = (str) => {
  return str.replace(/[^+\d]/g, ``);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const percentage = (a, b) => {
  return Math.round((+b / +a) * 100);
};
