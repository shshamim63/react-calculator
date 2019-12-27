import operate from './operate';

const attatchButton = (target, adder) => {
  const splitTarget = target.split('');
  if (adder === '.' && splitTarget.includes(adder)) {
    return target;
  }
  if ((splitTarget[0] === '0') && (splitTarget.length === 1) && (adder === '.')) {
    return (target + adder);
  }
  if ((splitTarget[0] === '0') && (splitTarget.length > 1) && (splitTarget[1] !== '.')) {
    splitTarget.shift();
    splitTarget.push(adder);
    return splitTarget.join('');
  }
  splitTarget.push(adder);
  return splitTarget.join('');
};
const invertNumber = (text) => {
  const value = text.split('');
  if (value[0] === '-') {
    value.shift();
  } else {
    value.unshift('-');
  }
  return value.join('');
};
const calculate = ({
  total, next, operation, renderResult,
}, btnName) => {
  switch (btnName) {
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      renderResult = false;
      break;
    case '=':
      if (!renderResult) {
        total = operation ? operate(total, next, operation) : next;
        next = total;
        operation = '';
        renderResult = true;
        if (total === 'Error') total = '0';
      }
      break;
    case '+/-':
      if (!renderResult) {
        next = invertNumber(next);
      }
      operation = '';
      renderResult = true;
      break;
    case '/':
    case 'x':
    case '-':
    case '+':
    case '%':
      if (!renderResult) {
        total = operation ? operate(total, next, operation) : next;
        next = total;
        operation = btnName;
        renderResult = true;
        if (total === 'Error') {
          total = '0';
          operation = '';
        }
      }
      break;
    default:
      next = renderResult ? btnName : attatchButton(next, btnName);
      renderResult = false;
      break;
  }
  return { total, next, operation };
};
export default calculate;
