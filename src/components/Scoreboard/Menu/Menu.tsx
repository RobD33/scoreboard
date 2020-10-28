import React, { useMemo, useRef } from 'react';
import EditPlayers from './EditPlayers/EditPlayers';
import SettingsButton from './SettingsButton/SettingsButton';
import ExitMenu from './ExitMenu/ExitMenu';
import './Menu.css'
import Undo from './Undo/Undo';
import Frame from '../../../Data/Frame';


const Menu = ({ changeComponent, show, setMenuState, setModalProps, frames }: Props) => {

    const closeMenu = useMemo(() => {
        return (e: MouseEvent)=> {
            if(node.current) {
                if(node.current.contains(e.target as Node)) return;
                else setMenuState(false)
            }
        }
    }, [setMenuState])

    const node = useRef<HTMLDivElement>(null)

    if(show) {
        document.addEventListener('click', closeMenu)
    } else {
        document.removeEventListener('click', closeMenu)
    }

    return (
        <div className={`Menu ${show ? 'show' : ''}`} ref={node}>
            <ExitMenu setMenuState={ setMenuState }/>
            <EditPlayers changeComponent={ changeComponent }/>
            <Undo setModalProps={setModalProps} frames={frames}/>
            <SettingsButton changeComponent={ changeComponent }/>
        </div>
    )
}

interface Props {
    changeComponent: Function;
    show: boolean;
    setMenuState: Function;
    setModalProps: Function;
    frames: Frame[];
}

export default Menu;