import React from 'react';
import PropTypes from 'prop-types';
import './assets/Loader.sass';

class Loader extends React.Component {
    render () {
        return (
            <div className={'loader'}>
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        )
    }
}

Loader.propTypes = {
};
Loader.defaultProps = {
};

export default Loader