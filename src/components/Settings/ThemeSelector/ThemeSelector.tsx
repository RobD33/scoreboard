import React from 'react'
import DisplaySettings from '../../../Data/DisplaySettings'
import { ChromePicker } from 'react-color'
import './ThemeSelector.css'

const ThemeSelector = ({ displaySettings, handleThemeChange, onChangeComplete}: Props) => {
    return (
        <div className='ThemeSelector'>
            <h2 className='themeHeader'>Colour Theme</h2>
            <div className='themeListWrapper'>
            <div className='themeList'>
                <ul >
                    <label>
                        <input
                            type='radio'
                            value='mono'
                            checked={displaySettings.theme === 'mono'}
                            onChange={(e) => handleThemeChange(e.target.value)}
                        />
                    One colour
                    </label>
                </ul>
                <ul>
                    <label>
                        <input
                            type='radio'
                            value='individual'
                            checked={displaySettings.theme === 'individual'}
                            onChange={(e) => handleThemeChange(e.target.value)}
                        />
                    individual players
                    </label>
                </ul>
            </div>
            </div>
            <div className='pickerWrapper'>
                <ChromePicker className='ColorPicker' disableAlpha={true} color={displaySettings.colors.mainColor} onChangeComplete={(color, e) => onChangeComplete(color)}/>
            </div>
        </div>
    )
}

interface Props {
    handleThemeChange: Function;
    displaySettings: DisplaySettings;
    onChangeComplete: Function;
}

export default ThemeSelector;