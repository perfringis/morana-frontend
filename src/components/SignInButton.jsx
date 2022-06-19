import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import '../style/SignInButton.scss';

const SignInButton = ({ title }) => {
    return <button className='sign-in'>
        <div className='avatar-title-order'>
            <div className='sign-in-avatar'>
                <FontAwesomeIcon icon={faUser} size="xs" className='user-icon' />
            </div>
            {title}
        </div>
    </button>;
};

SignInButton.propTypes = {
    title: PropTypes.string,
};

SignInButton.defaultProps = {
    title: 'button',
};

export default SignInButton;