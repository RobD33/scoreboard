import React from 'react'

const PlayerList = ({ sessionPlayers }: Props) => {
    return (
        <div>
            {sessionPlayers.map(player => {
                return(
                    <div key={player}>
                        {player}
                    </div>
                )
            })}
        </div>
    )
}
interface Props {
    sessionPlayers: string[];
}
export default PlayerList;