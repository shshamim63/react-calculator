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
      break;
    case '=':
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
