import React from 'react';
import PropTypes from 'prop-types';
import SuccessModalContent from "./SuccessModalContent";
import ErrorModalContent from "./ErrorModalContent";

class Modal extends React.Component {
    static defaultProps = {
        closeBtn: true,
        showModal: true,
        typeModal: ''
    };
    static propTypes = {
        closeBtn: PropTypes.bool,
        showModal: PropTypes.bool,
        typeModal: PropTypes.oneOf(['succ', 'fail'])
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
                { this.props.typeModal==='fail' && <ErrorModalContent closeBtn={!this.props.closeBtn}
                            onClose={this.onClose}
                            errorReqMessage={this.props.errorReqMessage}
                /> }
                { this.props.typeModal==='succ' && <SuccessModalContent closeBtn={this.props.closeBtn}
                                     onClose={this.onClose}
                /> }
            </div>
        )
    }
}

export default Modal