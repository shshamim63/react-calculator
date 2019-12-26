const invertNumber = (text) => {
  const value = text.split('');
  if (value[0] === '-') {
    value.shift();
  } else {
    value.unshift('-');
  }
  return value.join('');
};
const calculate = ({ total, next, operation }, btnName) => {
  switch (btnName) {
    case 'AC':
      total = '0';
      next = '';
      operation = '';
      break;
    case '=':
      total = operation ? operate(total, next, operation) : next;
      next = '0';
      operation = '';
      if (total === 'Error') total = '0';
      break;
    case '+/-':
      if (next) {
        next = invertNumber(next);
      } else {
        total = invertNumber(next);
      }
      operation = '';
      break;
    case '/':
    case 'x':
    case '-':
    case '+':
    case '%':
      break;
    default:
      break;
  }
  return { total, next, operation };
};
export default calculate;
