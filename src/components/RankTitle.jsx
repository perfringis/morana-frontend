import React from 'react';
import PropTypes from 'prop-types';

import '../style/RankTitle.scss';

const RankTitle = ({ season, rank }) => {
    return <div className='rank-title'>
        <div className='rank-title-season'>{season}</div>
        <div className='rank-title-rank'>{rank}</div>
    </div>;
};

RankTitle.propTypes = {
    title: PropTypes.string,
};

RankTitle.defaultProps = {
    title: 'button',
};

export default RankTitle;