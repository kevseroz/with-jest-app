import { arrConverter } from "./constants";

export const handleChange = (num: number) => {
  // break down the number into its units and create an array
  let numberUnit: unknown[];
  numberUnit = num.toString().split("").reverse();
  let numeral = 1;
  for (let k = 0; k < numberUnit.length; k++) {
    numberUnit.splice(k, 1, numberUnit[k] * numeral);
    numeral *= 10;
  }
  // make an array of objects with the number and the roman number equivalence
  let romansArray = [];
  for (let i = 0; i < numberUnit.length; i++) {
    const val = arrConverter.filter((obj) => {
      return obj[numberUnit[i]];
    })[0];
    romansArray.push(val);
  }

  //get rid of all the null values
  const result = romansArray.filter((val) => {
    return val != null || val != " ";
  });

  //return the string with the roman number
  return result
    .map(function (value, key) {
      return result[key][numberUnit[key]];
    })
    .reverse()
    .join("")
    .trim();
};
