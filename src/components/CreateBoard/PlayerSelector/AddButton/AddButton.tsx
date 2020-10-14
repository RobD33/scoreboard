import React from 'react'
import './AddButton.css'

const AddButton = ({ addPlayerToSession, player }: Props) => {
    return <button className='AddButton' onClick={(e) => addPlayerToSession(player)}><span role="img" aria-label='right'>➡️</span></button>
}

interface Props {
    addPlayerToSession: Function;
    player: string;
}

export default AddButton;