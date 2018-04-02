import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.sass';

const Button = (props) => {
    let btnClass = ['sm', 'md', 'lg'].includes(props.btnSize)? props.btnSize : 'lg'
    return (
        <button className={"btn-"+btnClass}>{props.value}</button>
    )
};

Button.propTypes = {
    value: PropTypes.number.isRequired,
    btnSize: PropTypes.oneOf(['sm', 'md', 'lg'])
};
Button.defaultProps = {
  btnSize: 'md'
};

export default Button