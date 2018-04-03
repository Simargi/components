import React from 'react';
import PropTypes from 'prop-types';

const ErrorModalContent = (props) => {
    return (
        <div className='modal-content'>
            {props.closeBtn && <button className='close' onClick={props.onClose}>X</button>}
            <p className='error-header'>{props.errorReqMessage}</p>
            <p className='modal-title error-title'>Error</p>
            <p className='modal-icon error-icon'>&#9763;</p>
        </div>
    )
};

ErrorModalContent.propTypes = {
    closeBtn: PropTypes.bool,
    onClose: PropTypes.func,
    errorReq: PropTypes.string
};

export default ErrorModalContent