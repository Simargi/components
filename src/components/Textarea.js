import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) =>
    <textarea name="textarea" id="text_area_component" cols="20" rows="5"
              maxLength={props.maxlength}
              disabled={props.disable}
              onChange={props.onChange}
    />

Textarea.propTypes = {
    maxLength: PropTypes.number,
    disabled: PropTypes.bool
};

export default Textarea