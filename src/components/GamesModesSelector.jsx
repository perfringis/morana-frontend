import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import '../style/GamesModesSelector.scss';

const GamesModesSelector = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const gameModes = ['All',
        'Ranked Solo/Duo',
        'Ranked Flex',
        'Normal Draft',
        'Normal Blind',
        'Aram'];

    const currentTitle = gameModes[0];

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <div className='game-modes-selector'>
            <div className='game-modes-selector-header' onClick={toggling}>
                <div className='game-modes-selector-header-title'>{selectedOption || currentTitle}</div>
                <div className='game-modes-selector-header-arrow'>
                    {isOpen ? <FontAwesomeIcon icon={faCaretUp} size="sm" /> : <FontAwesomeIcon icon={faCaretDown} size="sm" />}
                </div>
            </div>
            {isOpen && (<div className='game-modes-selector-list'>
                {gameModes.map((elem, i) => {
                    return <div onClick={onOptionClicked(elem)} className='game-modes-selector-list-item' key={i}>{elem}</div>;
                })}
            </div>)}
        </div>
    );

};

GamesModesSelector.propTypes = {
};

GamesModesSelector.defaultProps = {
};

export default GamesModesSelector;