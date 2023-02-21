import React from 'react';
import EightballToggle from './EightballToggle/EightballToggle';
import OptionsButton from './OptionsButton/OptionsButton';
import './Display.css';
import Menu from './Menu/Menu';
import BackButton from '../Common/BackButton/BackButton';
import DisplayProps from '../../Data/DisplayProps';

const Display = ({
    displayProps,
    children,
}: Props) => {
    const {
        setModalProps,
        removeLastFrame,
        toggleEightball,
        eightball,
        showEBT,
        showBack,
        showOpts,
        showMenu,
        setShowMenu,
    } = displayProps;

    return (
        <div className='Display'>
            {children}
            {showEBT &&<EightballToggle
                toggleEightball={ toggleEightball }
                eightball={ eightball }
            />}
            {showOpts && <OptionsButton setMenuState={ setShowMenu }/>}
            {showBack && <BackButton/>}
            <Menu
                show={showMenu}
                setMenuState={ setShowMenu }
                setModalProps={setModalProps}
                removeLastFrame={ removeLastFrame }
            />
        </div>
    )
}

interface Props {
    displayProps: DisplayProps;
    children: JSX.Element;
}

export default Display