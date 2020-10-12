import React from 'react';
import PlayerScore from '../PlayerScore/PlayerScore';
import PlayerTag from '../PlayerTag/PlayerTag'

const Scoreboard = () => {
    return (
        <div>
            <PlayerTag/>
            <PlayerScore/>
        </div>
    )
}

export default Scoreboard