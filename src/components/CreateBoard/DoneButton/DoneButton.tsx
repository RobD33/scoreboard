import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import './DoneButton.css'

const DoneButton = ({ numberOfSessionPlayers}: Props) => {
    const history = useHistory();
    const redirectToScoreboard = useCallback(() => history.push('/scoreboard'), [history]);

    return (
        <div className='DoneButton'>
            <button
                className='DoneButtonButton'
                disabled={ numberOfSessionPlayers < 2 }
                onClick={redirectToScoreboard}
            >GO</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
}

export default DoneButton;