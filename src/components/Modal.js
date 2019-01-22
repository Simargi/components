import React from 'react';
import PropTypes from 'prop-types';
import SuccessModalContent from "./SuccessModalContent";
import ErrorModalContent from "./ErrorModalContent";
import './assets/Modal.sass';

class Modal extends React.Component {
	static defaultProps = {
	};
	static propTypes = {
		typeModal: PropTypes.oneOf(['success', 'fail']),
		show: PropTypes.bool.isRequired,
		modalText: PropTypes.string,
		errorReqMessage: PropTypes.string
	};
	state = {
		show: this.props
	};
	onClose = () => {
		this.setState({
			show: false
		})
	};

	render() {
		let {show} = this.state;
		return (
			<div>
				{show && <div className={'modal modal-show'}>
					{this.props.typeModal === 'fail' && <ErrorModalContent closeBtn={false}
					                                                       onClose={this.onClose}
					                                                       errorReqMessage={this.props.errorReqMessage}
					                                                       modalText={this.props.modalText}
					/>}
					{this.props.typeModal === 'success' && <SuccessModalContent modalText={this.props.modalText} closeBtn={true}
					                                                            onClose={this.onClose}
					/>}
				</div>}
			</div>


		)
	}
}

export default Modal