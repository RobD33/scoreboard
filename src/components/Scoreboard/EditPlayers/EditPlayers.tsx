import React from 'react'
import './EditPlayers.css'

const EditPlayers = ({ changeComponent }: Props) => {
    return (
        <div className='EditPlayers'>
            <button
                onClick={ (e) => changeComponent('CreateBoard')}
                className='EditPlayersButton'
            >Edit Players</button>
        </div>
    )
}

interface Props {
    changeComponent: Function;
}

export default EditPlayers;