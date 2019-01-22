import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) =>
	<textarea
	          id={props.id}
	          name={props.name}
	          rows={props.rows}
	          cols={props.cols}
	          maxLength={props.maxLength}
	          disabled={props.disabled}
	          placeholder={props.placeholder}
	          onChange={props.onChange}
	/>

Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	rows: PropTypes.number,
	cols: PropTypes.number,
	maxLength: PropTypes.number,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

Textarea.defaultProps = {
	rows: 5,
	cols: 20
};

export default Textarea