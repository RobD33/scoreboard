import React from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import { ColorResult } from 'react-color'
import FontSelector from './FontSelector/FontSelector';
import './Settings.css'
import ThemeSelector from './ThemeSelector/ThemeSelector';

const Settings = ( { changeComponent, updateDisplaySettings, displaySettings }: Props) => {
    return (
        <div className='Settings'>
            <button className='BackButton' onClick={(e) => changeComponent('Scoreboard')}>Exit</button>
            <ThemeSelector displaySettings={ displaySettings } handleThemeChange={handleThemeChange(displaySettings, updateDisplaySettings)} onChangeComplete={onChangeComplete(displaySettings, updateDisplaySettings)}/>
            <FontSelector displaySettings={ displaySettings } handleFontChange= { handleFontChange(displaySettings, updateDisplaySettings)}/>
        </div>
    )
}

const handleThemeChange = (displaySettings: DisplaySettings, updateDisplaySettings: Function): Function => {
    return (theme: string): void => {
        updateDisplaySettings({...displaySettings, theme})
    }
}

const handleFontChange = (displaySettings: DisplaySettings, updateDisplaySettings: Function): Function => {
    return (fontFamily: string): void => {
        updateDisplaySettings({...displaySettings, fontFamily})
    }
}

const onChangeComplete = ( displaySettings: DisplaySettings, updateDisplaySettings: Function): Function => {
    return (color :ColorResult) => {
        const newDisplaySettings = {...displaySettings}
        const { r, g, b} = color.rgb
        newDisplaySettings.colors.mainColor = `rgb(${r},${g},${b})`
        updateDisplaySettings(newDisplaySettings)
    }
}

interface Props {
    changeComponent: Function;
    updateDisplaySettings: Function;
    displaySettings: DisplaySettings;
}

export default Settings;