import React from 'react';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';

const Scoreboard = ({ frames, sessionPlayers }: Props) => {
    return (
        <div>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={index}
                    player={player}
                    playerFrames={ getPlayerFrames(frames, player) }
                    opponents={ getOpponents(player, sessionPlayers) }
                />
            })}
            
        </div>
    )
}

const getOpponents = (player: string, sessionPlayers: string[]) => {
    return sessionPlayers.filter(sessionPlayer => sessionPlayer !== player)
}

const getPlayerFrames = (frames: { winner: string, loser: string, eightball: boolean }[], player: string) => {
    return frames.filter(frame => frame.winner === player)
}

interface Props {
    frames: { winner: string, loser: string, eightball: boolean }[];
    sessionPlayers: string[];
}

export default Scoreboard