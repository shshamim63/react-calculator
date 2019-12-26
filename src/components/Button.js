import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  const colorClass = color ? 'btn operator' : 'btn';
  const wideClass = wide ? `${colorClass} wide-class` : `${colorClass} normal-class`;
  return (
    <button type="button" className={wideClass}>{ name }</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
};
export default Button;
