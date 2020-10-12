import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'

const PlayerDisplay = () => {
    return (
        <div>
            <PlayerTag/>
            <OpponentsSelector/>
            <PlayerScore/>
        </div>
    )
}

export default PlayerDisplay;