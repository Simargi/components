import React from 'react';
import PropTypes from 'prop-types';
import './assets/Loader.sass';

class Loader extends React.Component {
    state = {
      percentValue: 0
    };
    loaderProgress = (time) => {
        let startValue = 0,
            timer = Math.round(time*1000/100),
            maxValue = 100;
        let intervalId = setInterval(() => {
            //let percentBlock = document.getElementById('percent');
            if (startValue > maxValue) {
                clearInterval(intervalId);
            } else {
                //percentBlock.innerHTML = startValue;
                this.setState({percentValue: startValue})
            }
            startValue++;
        }, timer)
    };
    render () {
        this.loaderProgress(this.props.time);
        return (
            <div className={'loader'}>
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
                <div >{this.state.percentValue} %</div>
            </div>
        )
    }
}
Loader.propTypes = {
    time: PropTypes.number
};
Loader.defaultProps = {
    time: 10
};
export default Loader