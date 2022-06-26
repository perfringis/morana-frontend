import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ text, size }) => {
    return <div style={{ size: size }}>{text}</div>;
};

Typography.propTypes = {
    text: PropTypes.string,
    size: PropTypes.number,
};

Typography.defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    size: 16
};

export default Typography;