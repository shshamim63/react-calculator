import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res = '';
  switch (operation) {
    case '+':
      res = Big(numberOne).plus(numberTwo).toString;
      break;
    case '-':
      res = Big(numberOne).minus(numberTwo).toString;
      break;
    case 'X':
      res = Big(numberOne).times(numberTwo).toString;
      break;
    case '/':
      res = numberTwo === '0' ? res = 'Infinity' : Big(numberOne).div(numberTwo).toString;
      break;
    case '%':
      res = Big(numberOne).div('100').times(numberTwo).toString;
      break;
    default:
      break;
  }
  return res;
};
export default operate;
