/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div>{ result }</div>
  );
};

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Display;
