import React from 'react'

const PlayerList = ({ sessionPlayers, removePlayerFromSession }: Props) => {
    return (
        <div>
            {sessionPlayers.map(player => {
                return(
                    <div key={player}>
                        {player}
                        <button onClick={(e) => removePlayerFromSession(player) }>-</button>
                    </div>
                )
            })}
        </div>
    )
}
interface Props {
    sessionPlayers: string[];
    removePlayerFromSession: Function;
}
export default PlayerList;