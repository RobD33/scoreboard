import React from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

const Scoreboard = ({ sessionState }: Props) => {
    return (
        <div>
            {Object.keys(sessionState).length && Object.keys(sessionState).map((player, index) => {
                return <PlayerDisplay key={index} player={player} scores={sessionState[player]}/>
            })}
            
        </div>
    )
}

interface Props {
    sessionState: { [name: string]: {} };
}

export default Scoreboard