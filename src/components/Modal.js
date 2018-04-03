import React from 'react';
import PropTypes from 'prop-types';
import SuccessModalContent from "./SuccessModalContent";
import ErrorModalContent from "./ErrorModalContent";
import './assets/Modal.sass';

class Modal extends React.Component {
    static defaultProps = {
        typeModal: 'success'
    };
    static propTypes = {
        typeModal: PropTypes.oneOf(['success', 'fail'])
    };
    state = {
        show: true
    };
    onClose = () => {
        this.setState({
            show: false
        })
    };
    render() {
        return (
            <div>
                {this.state.show && <div className={'modal modal-show'}>
                    { this.props.typeModal==='fail' && <ErrorModalContent closeBtn={false}
                                                                          onClose={this.onClose}
                                                                          errorReqMessage={this.props.errorReqMessage}
                    /> }
                    { this.props.typeModal==='success' && <SuccessModalContent closeBtn={true}
                                                                               onClose={this.onClose}
                    /> }
                </div>}
            </div>


        )
    }
}

export default Modal