import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './SettingsButton.css';

const SettingsButton = () => {
    const history = useHistory();
    const redirectToSettings = useCallback(() => history.push('/settings'), [history]);

    return (
        <div className='SettingsButton'>
        <button onClick={ redirectToSettings } className='MenuButton'>Settings</button>
        </div>
    )
}

export default SettingsButton;