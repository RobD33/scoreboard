import React from 'react'
import AddButton from './AddButton/AddButton'

const PlayerSelector = ({ listOfPotentialPlayers, addPlayerToSession }: Props) => {
    return (
        <div>
            {listOfPotentialPlayers.length && listOfPotentialPlayers.map(player => {
                return (
                    <div key={player}>
                        {player}
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