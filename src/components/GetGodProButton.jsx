import React from 'react';
import PropTypes from 'prop-types';

import '../style/GetGodProButton.scss';

const GetGodProButton = ({ title }) => {
    return <button className='get-god-pro'>{title}</button>;
};

GetGodProButton.propTypes = {
    title: PropTypes.string,
};

GetGodProButton.defaultProps = {
    title: 'button',
};

export default GetGodProButton;