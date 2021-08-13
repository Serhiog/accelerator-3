import { declension } from "../src/consts";

export const prettify = (num) => {
  let n = num.toString();
  const result = n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + ` `);
  return result + ` рублей`;
};

export const prettifyYears = (number) => {
  const declension = ["год", "года", "лет"];
  const cases = [2, 0, 1, 1, 1, 2];
  return declension[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
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
