import React from 'react';
import PropTypes from 'prop-types';
import './assets/Button.sass';

class Button extends React.Component {
    onBtnClickHandler = (event) => {
        const { onClick, disabled } = this.props;
        if (!disabled) onClick(event);
    };
    render() {
        const {btnSize, btnType, disabled, text} = this.props;
        let btnClass = ['sm', 'md', 'lg'].includes(btnSize)? btnSize : 'lg';
        return (
            <button className={"btn-"+btnClass} type={btnType} disabled={disabled} onClick={this.onBtnClickHandler}>{text}</button>
        )
    }
}

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
    onClick: f=>f
};

export default Button