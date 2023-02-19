import React, { useCallback } from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import EightballToggle from './EightballToggle/EightballToggle';
import OptionsButton from './OptionsButton/OptionsButton';
import './Display.css';
import Menu from './Menu/Menu';
import Scoreboard from '../Scoreboard/Scoreboard';
import SessionType from '../../Data/SessionType';
import RoundRobin from '../RoundRobin/RoundRobin';
import Match from '../../Data/Match';

const Display = ({ frames, RRmatches, sessionPlayers, addFrame, displaySettings, setModalProps, removeLastFrame, sessionType, addFrameToMatch }: Props) => {

    const [state, setState] = React.useState({ eightball: false, menu: false });

    const setMenuState = useCallback((menu: boolean): void => {
        setState(s =>  {return {...s, menu}})
    }, [])

    const toggleEightball = useCallback(() => {
        const newState = { ...state }
        newState.eightball = !newState.eightball
        setState(newState)
    }, [state])

    const scoreboardProps = {
        frames,
        sessionPlayers,
        addFrame,
        displaySettings,
        toggleEightball,
        menu: state.menu,
        eightball: state.eightball
    }

    return (
        <div className='Display'>
            { (sessionType === SessionType.freePlay) && <Scoreboard
                {...scoreboardProps}
            />}
            { (sessionType === SessionType.roundRobin) && <RoundRobin
                    RRmatches={ RRmatches }
                    addFrameToMatch={ addFrameToMatch }
                    sessionPlayers={ sessionPlayers }
                    displaySettings={ displaySettings }
                    toggleEightball={ toggleEightball }
                    menu={ state.menu }
                    eightball={ state.eightball }
            />}
            {(sessionType === SessionType.freePlay) &&<EightballToggle
                toggleEightball={ toggleEightball }
                eightball={ state.eightball }
            />}
            <OptionsButton setMenuState={ setMenuState }/>
            <Menu
                show={state.menu}
                setMenuState={ setMenuState }
                setModalProps={setModalProps}
                removeLastFrame={ removeLastFrame }
            />
        </div>
    )
}

interface Props {
    frames: { winner: string, loser: string, eightball: boolean }[];
    RRmatches: Match[];
    sessionPlayers: string[];
    addFrame: Function;
    displaySettings: DisplaySettings;
    setModalProps: Function;
    removeLastFrame: Function;
    sessionType: SessionType;
    addFrameToMatch: Function;
}

export default Display