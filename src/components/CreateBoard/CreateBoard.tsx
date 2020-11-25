import React from 'react'
import AddPlayer from './AddPlayer/AddPlayer'
import DoneButton from './DoneButton/DoneButton'
import PlayerList from './PlayerList/PlayerList'
import PlayerSelector from './PlayerSelector/PlayerSelector'
import './CreateBoard.css'
import ClearPlayers from './ClearPlayers/ClearPlayers'

const CreateBoard = ({ addPlayerToSession, listOfPotentialPlayers, sessionPlayers, addPlayerToGroupAndSession, removePlayerFromSession, setModalProps, clearAllPlayers }: Props) => {
    return (
        <div className='CreateBoard'>
            <PlayerSelector listOfPotentialPlayers={ listOfPotentialPlayers } addPlayerToSession={ addPlayerToSession }/>
            <AddPlayer addPlayerToGroupAndSession={ addPlayerToGroupAndSession }/>
            <PlayerList sessionPlayers={ sessionPlayers } removePlayerFromSession={ removePlayerFromSession }/>
            <ClearPlayers setModalProps={ setModalProps } clearAllPlayers={ clearAllPlayers }/>
            <DoneButton numberOfSessionPlayers={sessionPlayers.length}/>
        </div>
    )
}

interface Props {
    addPlayerToSession: Function;
    listOfPotentialPlayers: string[];
    sessionPlayers: string[];
    addPlayerToGroupAndSession: Function;
    removePlayerFromSession: Function;
    setModalProps: Function;
    clearAllPlayers: Function;
}

export default CreateBoard;