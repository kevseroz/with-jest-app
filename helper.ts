export const handleChange = (num: number) => {
  // break down the number into its units and create an array
  let numberUnit: unknown[];
  numberUnit = num.toString().split("").reverse();
  let numeral = 1;
  for (let k = 0; k < numberUnit.length; k++) {
    numberUnit.splice(k, 1, numberUnit[k] * numeral);
    numeral *= 10;
  }
};
