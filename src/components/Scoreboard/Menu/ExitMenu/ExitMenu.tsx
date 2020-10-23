import React from 'react';
import './ExitMenu.css';

const ExitMenu = ({ setMenuState }: Props) => {
    return (
        <div className='ExitMenu'>
            <button className='ExitMenuButton' onClick={(e) => setMenuState(false)}>
                exit
            </button>
        </div>
    )
}

interface Props {
    setMenuState: Function
}

export default ExitMenu;