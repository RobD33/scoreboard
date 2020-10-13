import React from 'react';
import EditPlayers from './EditPlayers/EditPlayers';
import EightballToggle from './EightballToggle/EightballToggle';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

const Scoreboard = ({ frames, sessionPlayers, addFrame, changeComponent, displaySettings }: Props) => {

    const [state, setState] = React.useState({ eightball: false });
    return (
        <div>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={ index }
                    player={ player }
                    playerFrames={ getPlayerFrames(frames, player) }
                    opponents={ getOpponents(player, sessionPlayers) }
                    addFrame={ addFrame }
                    eightball={ state.eightball }
                    toggleEightball={ toggleEightball(state, setState) }
                    displaySettings={ displaySettings }
                />
            })}
            <EightballToggle
                toggleEightball={ toggleEightball(state, setState) }
                eightball={ state.eightball }
            />
            <EditPlayers changeComponent={ changeComponent }/>
        </div>
    )
}

const getOpponents = (player: string, sessionPlayers: string[]) => {
    return sessionPlayers.filter(sessionPlayer => sessionPlayer !== player)
}

const getPlayerFrames = (frames: { winner: string, loser: string, eightball: boolean }[], player: string) => {
    return frames.filter(frame => frame.winner === player)
}

const toggleEightball = (state: { eightball:boolean }, setState: Function): Function => {
    return () => {
        const newState = { ...state }
        newState.eightball = !newState.eightball
        setState(newState)
    }
}

interface Props {
    frames: { winner: string, loser: string, eightball: boolean }[];
    sessionPlayers: string[];
    addFrame: Function;
    changeComponent: Function;
    displaySettings: { scores: string };
}

export default Scoreboard