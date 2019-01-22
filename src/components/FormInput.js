import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) =>
  <input
    id={props.id}
    type={props.type}
    name={props.name}
    maxLength={props.maxLength}
    disabled={props.disabled}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />

FormInput.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

FormInput.defaultProps = {
	type: 'text'
};

export default FormInput