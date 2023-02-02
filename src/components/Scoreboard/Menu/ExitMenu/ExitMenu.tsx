import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExitMenu.css';

const ExitMenu = () => {

    const navigate = useNavigate();
    const redirectToLanding = useCallback(() => navigate('/'), [navigate]);

    return (
        <div className='ExitMenu'>
            <button className='MenuButton' onClick={redirectToLanding}>
                Exit
            </button>
        </div>
    )
}

export default ExitMenu;