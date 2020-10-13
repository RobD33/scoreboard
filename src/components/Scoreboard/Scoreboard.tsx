import React from 'react';
import EightballToggle from './EightballToggle/EightballToggle';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

const Scoreboard = ({ frames, sessionPlayers, addFrame }: Props) => {

    const [state, setState] = React.useState({ eightball: false});
    return (
        <div>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={index}
                    player={player}
                    playerFrames={ getPlayerFrames(frames, player) }
                    opponents={ getOpponents(player, sessionPlayers) }
                    addFrame={ addFrame }
                    eightball={ state.eightball }
                    toggleEightball={toggleEightball(state, setState)}
                />
            })}
            <EightballToggle
                toggleEightball={toggleEightball(state, setState)}
                eightball={state.eightball}
            />
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
}

export default Scoreboard