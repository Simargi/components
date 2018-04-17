import React from 'react';
import PropTypes from 'prop-types';
//import { staticDomain, staticPath } from '../constants/static';

const Image = ({ name, alt }) => (
  <img
    src={name}
    alt={alt}
  />
);


Image.propTypes = {
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;

