import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, operator }) => (
  <div className="display">
    <div className="symbol">{ operator }</div>
    <div className="result">{ result }</div>
  </div>
);

Display.defaultProps = {
  result: '0',
  operator: '=',
};
Display.propTypes = {
  result: PropTypes.string,
  operator: PropTypes.string,
};
export default Display;
