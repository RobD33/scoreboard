import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import './DoneButton.css'

const DoneButton = ({ numberOfSessionPlayers}: Props) => {
    const navigate = useNavigate();
    const redirectToGameSelect = useCallback(() => navigate('/gameselect'), [navigate]);

    return (
        <div className='DoneButton'>
            <button
                className='DoneButtonButton'
                disabled={ numberOfSessionPlayers < 2 }
                onClick={() => redirectToGameSelect()}
            >GO</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
}

export default DoneButton;