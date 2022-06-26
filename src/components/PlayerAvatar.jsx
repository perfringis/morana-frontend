import React from 'react';
import PropTypes from 'prop-types';

import '../style/PlayerAvatar.scss';

const PlayerAvatar = ({ level }) => {
    return <div className='player-avatar'>
        <div className='player-account-level'>{level}</div>
    </div>;
};

PlayerAvatar.propTypes = {
    level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlayerAvatar.defaultProps = {
    level: 171,
};

export default PlayerAvatar;
