import React from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import { ColorResult, SketchPicker } from 'react-color'
import FontSelector from './FontSelector/FontSelector';

const Settings = ( { changeComponent, updateDisplaySettings, displaySettings }: Props) => {
    return (
        <div>
            <button onClick={(e) => changeComponent('Scoreboard')}>Exit</button>
            <div>
                <label>
                    One colour
                    <input
                        type='radio'
                        value='mono'
                        checked={displaySettings.theme === 'mono'}
                        onChange={(e) => handleThemeChange(displaySettings, updateDisplaySettings, e.target.value)}
                    /> 
                </label>
                <label>
                    individual players
                    <input
                        type='radio'
                        value='individual'
                        checked={displaySettings.theme === 'individual'}
                        onChange={(e) => handleThemeChange(displaySettings, updateDisplaySettings, e.target.value)}
                    />
                </label>
            </div>
            <SketchPicker color={displaySettings.colors.mainColor} onChangeComplete={(color, e) => onChangeComplete(color, e, displaySettings, updateDisplaySettings)}/>
            <FontSelector displaySettings={ displaySettings } handleFontChange= { handleFontChange(displaySettings, updateDisplaySettings)}/>
        </div>
    )
}

const handleThemeChange = (displaySettings: DisplaySettings, updateDisplaySettings: Function, theme: string): void => {
    updateDisplaySettings({...displaySettings, theme})
}

const handleFontChange = (displaySettings: DisplaySettings, updateDisplaySettings: Function): Function => {
    return (fontFamily: string): void => {
        updateDisplaySettings({...displaySettings, fontFamily})
    }
}

const onChangeComplete = (color :ColorResult, event: any, displaySettings: DisplaySettings, updateDisplaySettings: Function): void => {
    const newDisplaySettings = {...displaySettings}
    const { r, g, b} = color.rgb
    newDisplaySettings.colors.mainColor = `rgb(${r},${g},${b})`
    updateDisplaySettings(newDisplaySettings)
}

interface Props {
    changeComponent: Function;
    updateDisplaySettings: Function;
    displaySettings: DisplaySettings;
}

export default Settings;