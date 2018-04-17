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
            if (startValue > maxValue) {
                clearInterval(intervalId);
            } else {
                this.setState({percentValue: startValue})
            }
            startValue++;
        }, timer)
    };
    componentDidMount() {
        this.loaderProgress(this.props.time);
    }
    render () {
        return (
            <div>
                {this.state.percentValue < 100 && <div className={'loader'}>
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                    <div>{this.state.percentValue} %</div>
                </div> }
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