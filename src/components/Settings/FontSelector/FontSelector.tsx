import React from 'react';
import DisplaySettings from '../../../Data/DisplaySettings';
import './FontSelector.css'

const FontSelector = ({ handleFontChange, displaySettings }: Props) => {

    const fonts = ['Trebuchet MS', 'Orbitron', 'Permanent Marker', 'Yellowtail', 'Anton', 'Amatic SC']
    return (
        <div className='FontSelector'>
            <h2 className='fontHeader'>Fonts</h2>
            {fonts.map((font, index) => {
                return (
                    <ul className={`fontListItem item${classNameHashMap[index]}`} >
                        <label>
                            <input
                                type='radio'
                                value={font}
                                checked={displaySettings.fontFamily === font}
                                onChange={(e) => handleFontChange(e.target.value)}
                            />
                            {`  ${font}`}
                        </label>
                    </ul>
                )
            })}
        </div>
    )
}

const classNameHashMap: {[index: number]: string} = {
    0: 'One',
    1: 'Two',
    2: 'Three',
    3: 'Four',
    4: 'Five',
    5: 'Six'
}

interface Props {
    handleFontChange: Function;
    displaySettings: DisplaySettings;
}

export default FontSelector;