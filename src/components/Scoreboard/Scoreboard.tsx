import React, { useCallback } from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import EightballToggle from './EightballToggle/EightballToggle';
import OptionsButton from './OptionsButton/OptionsButton';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import './Scoreboard.css';
import Menu from './Menu/Menu';
import { numberOfPlayersHashMap } from '../../utils/hashMaps';

const Scoreboard = ({ frames, sessionPlayers, addFrame, changeComponent, displaySettings }: Props) => {

    const [state, setState] = React.useState({ eightball: false, menu: false });

    const setMenuState = useCallback((menu: boolean): void => {
        setState(s =>  {return {...s, menu}})
    }, [])

    return (
        <div className={`Scoreboard ${numberOfPlayersHashMap[sessionPlayers.length]}`}>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={ index }
                    playerNumber={ index + 1 }
                    player={ player }
                    playerFrames={ getPlayerFrames(frames, player) }
                    opponents={ getOpponents(player, sessionPlayers) }
                    addFrame={ checkForMenu(addFrame, state.menu) }
                    eightball={ state.eightball }
                    toggleEightball={ toggleEightball(state, setState) }
                    displaySettings={ displaySettings }
                    sessionPlayers={sessionPlayers}
                    frames={ frames }
                />
            })}
            {sessionPlayers.length === 2 &&
                <div className='dash'>
                    -
                </div>
            }
            <EightballToggle
                toggleEightball={ toggleEightball(state, setState) }
                eightball={ state.eightball }
            />
            <OptionsButton setMenuState={ setMenuState }/>
            <Menu changeComponent={ changeComponent } show={state.menu} setMenuState={ setMenuState }/>
        </div>
    )
}

const getOpponents = (player: string, sessionPlayers: string[]) => {
    return sessionPlayers.filter(sessionPlayer => sessionPlayer !== player)
}

const getPlayerFrames = (frames: { winner: string, loser: string, eightball: boolean }[], player: string) => {
    return frames.filter(frame => frame.winner === player)
}

const toggleEightball = (state: State, setState: Function): Function => {
    return () => {
        const newState = { ...state }
        newState.eightball = !newState.eightball
        setState(newState)
    }
}

const checkForMenu = (addFrame: Function, menu: boolean): Function => {
    if(menu) return () => {}
    else return addFrame;
}

interface Props {
    frames: { winner: string, loser: string, eightball: boolean }[];
    sessionPlayers: string[];
    addFrame: Function;
    changeComponent: Function;
    displaySettings: DisplaySettings;
}

interface State {
    eightball: boolean;
    menu: boolean;
}

export default Scoreboard