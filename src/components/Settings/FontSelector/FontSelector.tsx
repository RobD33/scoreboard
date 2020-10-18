import React from 'react';
import DisplaySettings from '../../../Data/DisplaySettings';

const FontSelector = ({ handleFontChange, displaySettings }: Props) => {

    const fonts = ['Trebuchet MS', 'Orbitron', 'Permanent Marker', 'Yellowtail', 'Anton', 'Amatic SC']
    return (
        <div>
            {fonts.map((font) => {
                return (
                    <label>
                        {font}
                        <input
                            type='radio'
                            value={font}
                            checked={displaySettings.fontFamily === font}
                            onChange={(e) => handleFontChange(e.target.value)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

interface Props {
    handleFontChange: Function;
    displaySettings: DisplaySettings;
}

export default FontSelector;