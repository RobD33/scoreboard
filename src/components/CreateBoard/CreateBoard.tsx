import React from 'react'
import AddPlayer from './AddPlayer/AddPlayer'
import PlayerList from './PlayerList/PlayerList'
import PlayerSelector from './PlayerSelector/PlayerSelector'

const CreateBoard = ({ addPlayerToSession, listOfPotentialPlayers, sessionPlayers, addPlayerToGroup }: Props) => {
    return (
        <div>
            <PlayerSelector listOfPotentialPlayers={ listOfPotentialPlayers } addPlayerToSession={ addPlayerToSession }/>
            <AddPlayer addPlayerToGroup={ addPlayerToGroup } addPlayerToSession={ addPlayerToSession }/>
            <PlayerList sessionPlayers={ sessionPlayers }/>
        </div>
    )
}

interface Props {
    addPlayerToSession: Function;
    listOfPotentialPlayers: string[];
    sessionPlayers: string[];
    addPlayerToGroup: Function;
}

export default CreateBoard;