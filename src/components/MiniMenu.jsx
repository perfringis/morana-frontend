import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../style/MiniMenu.scss';

const MiniMenu = () => {
    const [selected, setSelected] = useState(false);

    const tabs = [
        'Summary',
        'Champion Pool',
        'Live Game'
    ];

    const test = () => {
        setSelected(!selected);
    };

    const currentTab = tabs[0];

    return <div className='mini-menu'>
        {tabs.map((tab, i) => {
            if (i == 0) {
                return <div className='mini-menu-elem active' key={i} onClick={test}>
                    <div className='mini-menu-elem-text'>{tab}</div>
                </div>
            } else {
                return <div className='mini-menu-elem' key={i} onClick={test}>
                    <div className='mini-menu-elem-text'>{tab}</div>
                </div>
            }
        })}
    </div>;
};

MiniMenu.propTypes = {
};

MiniMenu.defaultProps = {
};

export default MiniMenu;
