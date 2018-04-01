import React from 'react';
import PropTypes from 'prop-types';
import './assets/Modal.sass';

class ErrorModal extends React.Component {
    static defaultProps = {
        closeBtn: false,
        showModal: true
    };
    static propTypes = {
        closeBtn: PropTypes.bool,
        show: PropTypes.bool
    };
    state = {
        show: this.props.showModal !== 'undefined'? this.props.showModal: true,
        classNameShowModal: 'modal-show'
    };
    onClose = () => {
        this.setState({
            show: false
        })
    };
    render() {
        if (!this.state.show) {
            this.state.classNameShowModal = ''
        }
        return (
            <div className={'modal '+ this.state.classNameShowModal}>
                <div className='modal-content'>
                    {this.props.closeBtn && <button className='close' onClick={this.onClose}>X</button>}
                    <p className='error-header'>{this.props.errorReq}</p>
                    <p className='modal-title error-title'>Error</p>
                    <p className='modal-icon error-icon'>&#10004;</p>
                </div>
            </div>
        )
    }
}

export default ErrorModal