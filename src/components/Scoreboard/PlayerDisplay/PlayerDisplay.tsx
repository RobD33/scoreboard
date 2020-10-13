import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'

const PlayerDisplay = ({ player, playerFrames, opponents, addFrame, eightball, toggleEightball, displaySettings } :Props) => {
    return (
        <div>
            <PlayerTag player={player}/>
            {opponents.length > 1 &&
                <OpponentsSelector
                    opponents={ opponents }
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={ createFrameAndToggleEightball(player, eightball, toggleEightball) }
                />
            }
            {(displaySettings.scores === 'total' || opponents.length === 1) &&
                <PlayerScore
                    playerFrames={playerFrames}
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={createFrameAndToggleEightball(player, eightball, toggleEightball)}
                    opponents={ opponents }
                />
            }
        </div>
    )
}

const createFrameAndToggleEightball = (player: string, eightball: boolean, toggleEightball: Function): Function => {
    return (opponent: string): { winner: string, loser: string, eightball: boolean } => {
        const frameEightball = eightball
        if(eightball) toggleEightball()
        return { winner: player, loser: opponent, eightball: frameEightball }
    }
}

interface Props {
    player: string;
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    opponents: string[];
    addFrame: Function;
    eightball: boolean;
    toggleEightball: Function;
    displaySettings: { scores: string };
}


export default PlayerDisplay;