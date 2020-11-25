import React from 'react'
import './PlayerList.css'
import RemoveButton from './RemoveButton/RemoveButton'

const PlayerList = ({ sessionPlayers, removePlayerFromSession }: Props) => {
    return (
        <div className='PlayerList'>
            {sessionPlayers.map(player => {
                return(
                    <div key={player} className='Player'>
                        <label className='Name'>{player}</label>
                        <RemoveButton
                            removePlayerFromSession={ removePlayerFromSession }
                            player={ player }
                        />
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