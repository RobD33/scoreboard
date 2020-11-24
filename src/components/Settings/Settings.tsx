import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import DisplaySettings from '../../Data/DisplaySettings';
import { ColorResult } from 'react-color'
import FontSelector from './FontSelector/FontSelector';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import ScoresToggle from './ScoresToggle/ScoresToggle';
import './Settings.css';
import BackButton from '../Common/BackButton/BackButton';
import RestoreButton from './RestoreButton/RestoreButton';

const Settings = ( { updateDisplaySettings, displaySettings, setDefaultDisplaySettings }: Props) => {
    const history = useHistory();
    const redirectToScoreboard = useCallback(() => history.push('/scoreboard'), [history]);

    return (
        <div className='Settings'>
            <BackButton onClick={ redirectToScoreboard } />
            <RestoreButton setDefaultDisplaySettings={ setDefaultDisplaySettings } />
            <ThemeSelector displaySettings={ displaySettings } handleThemeChange={ handleThemeChange(displaySettings, updateDisplaySettings) } onChangeComplete={ onChangeComplete(displaySettings, updateDisplaySettings) }/>
            <FontSelector displaySettings={ displaySettings } handleFontChange= { handleFontChange(displaySettings, updateDisplaySettings) }/>
            <ScoresToggle displaySettings={ displaySettings } handleScoresToggle={ handleScoresToggle(displaySettings, updateDisplaySettings) } />
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
        const newDisplaySettings = {...displaySettings, colors: {...displaySettings.colors}}
        const { r, g, b } = color.rgb
        newDisplaySettings.colors.mainColor = `rgb(${r},${g},${b})`
        updateDisplaySettings(newDisplaySettings)
    }
}

const handleScoresToggle = (displaySettings: DisplaySettings, updateDisplaySettings: Function): Function => {
    return (value: string): void => {
        const newDisplaySettings = { ...displaySettings }
        newDisplaySettings[value] = !newDisplaySettings[value]
        updateDisplaySettings(newDisplaySettings);
    }
}

interface Props {
    updateDisplaySettings: Function;
    displaySettings: DisplaySettings;
    setDefaultDisplaySettings: Function;
}

export default Settings;