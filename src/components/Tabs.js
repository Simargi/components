import React from 'react';
import PropTypes from 'prop-types';
import './assets/Tabs.sass';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: this.props.selected };
    }
    _renderTitles = () => {
        const labels = (child, idx) => {
            let activeClass = (this.state.selected === idx ? 'is-active' : '');
            return (
                <li role="tab" key={idx} >
                    <a className={activeClass}  onClick={onClick.bind(this, idx)} href="#">
                        {child.props.label}
                    </a>
                </li>
            );
        };
        let onClick = (index, event) => {
            event.preventDefault();
            this.setState({
                selected: index
            });
        };
        return (
            <ul className="tabs__labels" role="tablist">
                {this.props.children.map(labels)}
            </ul>
        );
    };
    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                <div className="tabs__content">
                    {this.props.children[this.state.selected]}
                </div>
            </div>);
    }
}
Tabs.propTypes = {
    selected: PropTypes.number
};
Tabs.defaultProps = {
    selected: 0
};

export default Tabs