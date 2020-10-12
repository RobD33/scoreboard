import React from 'react'
import AddPlayer from './AddPlayer/AddPlayer'
import PlayerList from './PlayerList/PlayerList'
import PlayerSelector from './PlayerSelector/PlayerSelector'

const CreateBoard = ({ addPlayerToSession, listOfPotentialPlayers, sessionPlayers, addPlayerToGroupAndSession, removePlayerFromSession }: Props) => {
    return (
        <div>
            <PlayerSelector listOfPotentialPlayers={ listOfPotentialPlayers } addPlayerToSession={ addPlayerToSession }/>
            <AddPlayer addPlayerToGroupAndSession={ addPlayerToGroupAndSession }/>
            <PlayerList sessionPlayers={ sessionPlayers } removePlayerFromSession={ removePlayerFromSession }/>
        </div>
    )
}

interface Props {
    addPlayerToSession: Function;
    listOfPotentialPlayers: string[];
    sessionPlayers: string[];
    addPlayerToGroupAndSession: Function;
    removePlayerFromSession: Function;
}

export default CreateBoard;