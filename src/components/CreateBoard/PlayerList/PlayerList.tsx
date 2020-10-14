import React from 'react'
import './PlayerList.css'

const PlayerList = ({ sessionPlayers, removePlayerFromSession }: Props) => {
    return (
        <div className='PlayerList'>
            {sessionPlayers.map(player => {
                return(
                    <div key={player}>
                        {player}
                        <button className='RemovePlayer' onClick={(e) => removePlayerFromSession(player) }>-</button>
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