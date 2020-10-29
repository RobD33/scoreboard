import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './ExitMenu.css';

const ExitMenu = () => {

    const history = useHistory();
    const redirectToLanding = useCallback(() => history.push('/'), [history]);

    return (
        <div className='ExitMenu'>
            <button className='ExitMenuButton' onClick={redirectToLanding}>
                exit
            </button>
        </div>
    )
}

export default ExitMenu;