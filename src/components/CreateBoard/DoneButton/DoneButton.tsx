import React from 'react';
import './DoneButton.css'

const DoneButton = ({ numberOfSessionPlayers, changeComponent }: Props) => {
    return (
        <div className='DoneButton'>
            <button
                className='DoneButtonButton'
                disabled={ numberOfSessionPlayers < 2 }
                onClick={(e) => changeComponent('Scoreboard')}
            >GO</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
    changeComponent: Function;
}

export default DoneButton;