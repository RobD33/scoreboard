import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import './DoneButton.css'

const DoneButton = ({ numberOfSessionPlayers}: Props) => {
    const navigate = useNavigate();
    const redirectToScoreboard = useCallback(() => navigate('/scoreboard'), [navigate]);

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