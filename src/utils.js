export const prettify = (num) => {
  var n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
};

export const delSpaces = (str) => {
  str = str.replace(/\s/g, "");
  return str;
};

export const setOnlyNums = (str) => {
  return str.replace(/[^+\d]/g, "");
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const percentage = (a, b) => {
  return Math.round((+b / +a) * 100);
};
