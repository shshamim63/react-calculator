import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return <button type="button">{ name }</button>;
};

Button.ropTypes = {
  name: PropTypes.string.isRequired
}
export default Button;
