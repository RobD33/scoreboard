import React, { useMemo, useRef } from 'react';
import EditPlayers from '../EditPlayers/EditPlayers';
import SettingsButton from '../SettingsButton/SettingsButton';
import ExitMenu from './ExitMenu/ExitMenu';
import './Menu.css'

const Menu = ({ changeComponent, show, setMenuState }: Props) => {

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
        <div className={`Menu ${show?'show':''}`} ref={node}>
            <ExitMenu setMenuState={ setMenuState }/>
            <EditPlayers changeComponent={ changeComponent }/>
            <SettingsButton changeComponent={ changeComponent }/>
        </div>
    )
}

interface Props {
    changeComponent: Function;
    show: boolean;
    setMenuState: Function;
}

export default Menu;