import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.sass';

const Button = (props) => {
    let btnClass = ['sm', 'md', 'lg'].includes(props.btnSize)? props.btnSize : 'lg'
    return (
        <button className={"btn-"+btnClass} type={props.btnType}>{props.value}</button>
    )
};

Button.propTypes = {
    value: PropTypes.any.isRequired,
    btnType: PropTypes.string,
    btnSize: PropTypes.oneOf(['sm', 'md', 'lg'])
};
Button.defaultProps = {
    btnSize: 'md',
    btnType: 'button'
};

export default Button