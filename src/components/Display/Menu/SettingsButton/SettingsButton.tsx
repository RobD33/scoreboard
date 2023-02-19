import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsButton.css';

const SettingsButton = () => {
    const navigate = useNavigate();
    const redirectToSettings = useCallback(() => navigate('/settings'), [navigate]);

    return (
        <div className='SettingsButton'>
        <button onClick={ redirectToSettings } className='MenuButton'>Settings</button>
        </div>
    )
}

export default SettingsButton;