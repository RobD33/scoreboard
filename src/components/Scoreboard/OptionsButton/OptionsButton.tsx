import React from 'react';
import './OptionsButton.css'

const OptionsButton = ({ setMenuState }: Props) => {
    return (
        <div className='OptionsButton'>
            <button
            className='optionsButtonButton'
            onClick={ (e) => setMenuState(true)}
        >
                <div className='iconLine lineOne'/>
                <div className='iconLine lineTwo'/>
                <div className='iconLine lineThree'/>
            </button>
        </div>
    )
}

interface Props {
    setMenuState: Function;
}

export default OptionsButton;