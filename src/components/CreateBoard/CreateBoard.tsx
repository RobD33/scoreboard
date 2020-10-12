import React from 'react'
import AddPlayer from './AddPlayer/AddPlayer'
import PlayerList from './PlayerList/PlayerList'
import PlayerSelector from './PlayerSelector/PlayerSelector'

const CreateBoard = ({ addPlayerToState, listOfPotentialPlayers }: Props) => {
    return (
        <div>
            <PlayerSelector listOfPotentialPlayers={ listOfPotentialPlayers } addPlayerToState={ addPlayerToState }/>
            <AddPlayer/>
            <PlayerList/>
        </div>
    )
}

interface Props {
    addPlayerToState: Function;
    listOfPotentialPlayers: string[];
}

export default CreateBoard;