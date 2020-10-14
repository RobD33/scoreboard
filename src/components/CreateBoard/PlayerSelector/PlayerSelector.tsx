import React from 'react'
import AddButton from './AddButton/AddButton'
import './PlayerSelector.css'

const PlayerSelector = ({ listOfPotentialPlayers, addPlayerToSession }: Props) => {
    return (
        <div className='PlayerSelector'>
            {listOfPotentialPlayers.length && listOfPotentialPlayers.map(player => {
                console.log(listOfPotentialPlayers)
                return (
                    <div key={player} className='Player'>
                        <label className='Name'>{player}</label>
                        <AddButton addPlayerToSession={ addPlayerToSession } player={ player }/>
                    </div>
                )
            })}
        </div>
    )
}

interface Props {
    listOfPotentialPlayers: string[];
    addPlayerToSession: Function;
}

export default PlayerSelector;