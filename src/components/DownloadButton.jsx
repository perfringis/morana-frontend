import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import '../style/DownloadButton.scss';

const DownloadButton = ({ title }) => {
    return <button className='download-button'>
        <FontAwesomeIcon icon={faDownload} size="lg" className='download-icon'/>
        {title}
    </button>;
};

DownloadButton.propTypes = {
    title: PropTypes.string,
};

DownloadButton.defaultProps = {
    title: 'button',
};

export default DownloadButton;