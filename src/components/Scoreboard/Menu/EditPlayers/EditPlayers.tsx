import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './EditPlayers.css';

const EditPlayers = () => {
    const history = useHistory();
    const redirectToCreateBoard = useCallback(() => history.push('/createboard'), [history]);

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