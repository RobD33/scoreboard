import React from 'react'
import AddButton from './AddButton/AddButton'

const PlayerSelector = ({ listOfPotentialPlayers, addPlayerToState }: Props) => {
    return (
        <div>
            {listOfPotentialPlayers.length && listOfPotentialPlayers.map(player => {
                return (
                    <div key={player}>
                        {player}
                        <AddButton addPlayerToState={ addPlayerToState } player={ player }/>
                    </div>
                )
            })}
        </div>
    )
}

interface Props {
    listOfPotentialPlayers: string[];
    addPlayerToState: Function;
}

export default PlayerSelector;