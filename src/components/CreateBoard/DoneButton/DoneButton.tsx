import React from 'react';

const DoneButton = ({ numberOfSessionPlayers, changeComponent }: Props) => {
    return (
        <div>
            <button disabled={ numberOfSessionPlayers < 2 } onClick={(e) => changeComponent('ScoreBoard')}>Done</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
    changeComponent: Function;
}

export default DoneButton;