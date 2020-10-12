import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'

const PlayerDisplay = ({ player, playerFrames, opponents } :Props) => {
    return (
        <div>
            <PlayerTag player={player}/>
            <OpponentsSelector opponents={ opponents }/>
            <PlayerScore playerFrames={playerFrames}/>
        </div>
    )
}

interface Props {
    player: string;
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    opponents: string[];
}


export default PlayerDisplay;