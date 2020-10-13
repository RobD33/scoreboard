import React from 'react'
import AddPlayer from './AddPlayer/AddPlayer'
import DoneButton from './DoneButton/DoneButton'
import PlayerList from './PlayerList/PlayerList'
import PlayerSelector from './PlayerSelector/PlayerSelector'

const CreateBoard = ({ addPlayerToSession, listOfPotentialPlayers, sessionPlayers, addPlayerToGroupAndSession, removePlayerFromSession, changeComponent }: Props) => {
    return (
        <div>
            <PlayerSelector listOfPotentialPlayers={ listOfPotentialPlayers } addPlayerToSession={ addPlayerToSession }/>
            <AddPlayer addPlayerToGroupAndSession={ addPlayerToGroupAndSession }/>
            <PlayerList sessionPlayers={ sessionPlayers } removePlayerFromSession={ removePlayerFromSession }/>
            <DoneButton numberOfSessionPlayers={sessionPlayers.length} changeComponent={changeComponent}/>
        </div>
    )
}

interface Props {
    addPlayerToSession: Function;
    listOfPotentialPlayers: string[];
    sessionPlayers: string[];
    addPlayerToGroupAndSession: Function;
    removePlayerFromSession: Function;
    changeComponent: Function;
}

export default CreateBoard;