import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'

const PlayerDisplay = ({ player,scores } :Props) => {
    return (
        <div>
            <PlayerTag player={player}/>
            <OpponentsSelector scores={scores}/>
            <PlayerScore scores={scores}/>
        </div>
    )
}

interface Props {
    player: string;
    scores: {};
}


export default PlayerDisplay;