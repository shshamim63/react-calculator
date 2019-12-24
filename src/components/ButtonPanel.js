import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const firstrowChars = ['AC', '+/-', '%', '/'];
  const secondRowChars = [7, 8, 9, 'X'];
  const thirdRowChars = [4, 5, 6, '-'];
  const fourthRowChars = [1, 2, 3, '+'];
  const fifthRowChars = [0, '.', '='];
  const rows = [firstrowChars, secondRowChars, thirdRowChars, fourthRowChars, fifthRowChars];
  return (
    <div id="button-panel">
      {rows.map((row) => (
        <div className="row" key={row}>
          {row.map((char) => <Button name={String(char)} key={char} />)}
        </div>
      ))}
    </div>
  );
};
export default ButtonPanel;
