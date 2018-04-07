import React from 'react';
import PropTypes from 'prop-types';

const SuccessModalContent = (props) => {
    return (
        <div className='modal-content'>
            {props.closeBtn && <button className='close' onClick={props.onClose}>X</button>}
            <p className='modal-title success-title'>Success</p>
            <p className='modal-icon success-icon'>&#10004;</p>
        </div>
    )
};

SuccessModalContent.propTypes = {
    closeBtn: PropTypes.bool,
    onClose: PropTypes.func
};

export default SuccessModalContent