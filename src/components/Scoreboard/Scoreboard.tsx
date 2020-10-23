import React from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import EditPlayers from './EditPlayers/EditPlayers';
import EightballToggle from './EightballToggle/EightballToggle';
import OptionsButton from './OptionsButton/OptionsButton';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import './Scoreboard.css'
import SettingsButton from './SettingsButton/SettingsButton';

const Scoreboard = ({ frames, sessionPlayers, addFrame, changeComponent, displaySettings }: Props) => {

    const [state, setState] = React.useState({ eightball: false, menu: false });
    return (
        <div className={`Scoreboard ${classNameHashMap[sessionPlayers.length]}`}>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={ index }
                    playerNumber={ index + 1 }
                    player={ player }
                    playerFrames={ getPlayerFrames(frames, player) }
                    opponents={ getOpponents(player, sessionPlayers) }
                    addFrame={ addFrame }
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
            <EditPlayers changeComponent={ changeComponent }/>
            <SettingsButton changeComponent={ changeComponent }/>
            <OptionsButton setMenuState={ setMenuState(state, setState) }/>
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

const setMenuState = (state: State, setState: Function): Function => {
    return (value: boolean): void => {
        setState({ ...state, menu: value})
    }
}

const classNameHashMap: { [index: number]: string} = {
    2: 'twoPlayer',
    3: 'threePlayer',
    4: 'fourPlayer',
    5: 'fivePlayer',
    6: 'sixPlayer' 
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