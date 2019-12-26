import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    <div className="symbol"> X </div>
    <div className="result">{ result }</div>
  </div>
);

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};
export default Display;
