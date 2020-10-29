import React from 'react';
import EditPlayers from './EditPlayers/EditPlayers';
import SettingsButton from './SettingsButton/SettingsButton';
import ExitMenu from './ExitMenu/ExitMenu';
import './Menu.css'
import Undo from './Undo/Undo';


const Menu = ({ show, setMenuState, setModalProps, removeLastFrame }: Props) => {

    return (
        <div>
            {show && <div className='menuOverlay' onClick={(e) => setMenuState(false)}/>}
            <div className={`Menu ${show ? 'show' : ''}`}>
                <ExitMenu setMenuState={ setMenuState }/>
                <EditPlayers />
                <Undo setModalProps={setModalProps} setMenuState={setMenuState} removeLastFrame={removeLastFrame}/>
                <SettingsButton />
            </div>
        </div>
    )
}

interface Props {
    show: boolean;
    setMenuState: Function;
    setModalProps: Function;
    removeLastFrame: Function;
}

export default Menu;