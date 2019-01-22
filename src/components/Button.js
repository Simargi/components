import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.sass';

const Button = (props) => {
	const {btnSize, btnType, disabled, text, onClick} = props;
	let btnClass = ['sm', 'md', 'lg'].includes(btnSize) ? btnSize : 'lg';
	return (
		<button className={"btn-" + btnClass} type={btnType} disabled={disabled} onClick={onClick}>{text}</button>
	)
};

Button.propTypes = {
	text: PropTypes.any.isRequired,
	btnType: PropTypes.string,
	btnSize: PropTypes.oneOf(['sm', 'md', 'lg']),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
Button.defaultProps = {
	btnSize: 'md',
	btnType: 'button',
	disabled: false,
	onClick: f => f
};

export default Button