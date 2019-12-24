import React from 'react';

const Display = (props) => {
  return (
    <div> props.result </div>
  );
};

Display.defaultProps = {
  result: '0'
}
