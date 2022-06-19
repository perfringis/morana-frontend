import React from 'react';
import PropTypes from 'prop-types';

import '../style/UpdateButton.scss';

const UpdateButton = ({ title }) => {
    return <button className='update-button'>
        {title}
    </button>;
};

UpdateButton.propTypes = {
    title: PropTypes.string,
};

UpdateButton.defaultProps = {
    title: 'Update',
};

export default UpdateButton;