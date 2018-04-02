import React from 'react';
import PropTypes from 'prop-types';
import './assets/Modal.sass';
import SuccessModalContent from "./SuccessModalContent";

class SuccessModal extends React.Component {
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
                    <p className='modal-title success-title'>Success</p>
                    <p className='modal-icon success-icon'>&#10004;</p>
                </div>
                <SuccessModalContent closeBtn={this.props.closeBtn} onClose={this.onClose} />
            </div>
        )
    }
}

export default SuccessModal