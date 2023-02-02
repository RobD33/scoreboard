import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditPlayers.css';

const EditPlayers = () => {
    const navigate = useNavigate();
    const redirectToCreateBoard = useCallback(() => navigate('/createboard'), [navigate]);

    return (
        <div className='EditPlayers'>
            <button
                onClick={ redirectToCreateBoard }
                className='MenuButton'
            >Edit Players</button>
        </div>
    )
}


export default EditPlayers;