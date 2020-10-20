import React from 'react'
import './PlayerList.css'

const PlayerList = ({ sessionPlayers, removePlayerFromSession }: Props) => {
    return (
        <div className='PlayerList'>
            {sessionPlayers.map(player => {
                return(
                    <div key={player} className='Player'>
                        <label className='Name'>{player}</label>
                        <button className='RemoveButton' onClick={(e) => removePlayerFromSession(player) }>-</button>
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