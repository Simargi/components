import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
    return <div>{props.children}</div>;
};

TabPanel.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};
TabPanel.defaultProps = {
    label: 'tab',
    children: 'Put text here...'
};

export default TabPanel