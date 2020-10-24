import React from 'react';
import './SettingsButton.css'

const SettingsButton = ({ changeComponent }: Props) => {
    return (
        <div className='SettingsButton'>
        <button onClick={(e) => changeComponent('Settings')} className='SettingsButtonButton'>settings</button>
        </div>
    )
}

interface Props {
    changeComponent: Function;
}
export default SettingsButton;