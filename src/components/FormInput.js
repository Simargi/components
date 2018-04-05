import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
    static defaultProps = {
        type: 'text',
        placeholder: 'Enter text here',
    };
    static propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired
    };
    render() {
        return(
            <input type={this.props.type}
                   placeholder={this.props.placeholder}
                   name={this.props.name}
                   onChange={this.props.checkInputValue}
            />
        )
    }
}

export default FormInput