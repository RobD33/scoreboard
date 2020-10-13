import React from 'react';

const DoneButton = ({ numberOfSessionPlayers, changeComponent }: Props) => {
    return (
        <div>
            <button disabled={ numberOfSessionPlayers < 2 } onClick={(e) => changeComponent('Scoreboard')}>Done</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
    changeComponent: Function;
}

export default DoneButton;