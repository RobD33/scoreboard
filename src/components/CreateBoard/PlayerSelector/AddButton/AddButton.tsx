import React from 'react'

const AddButton = ({ addPlayerToSession, player }: Props) => {
    return <button onClick={(e) => addPlayerToSession(player)}>+</button>
}

interface Props {
    addPlayerToSession: Function;
    player: string;
}

export default AddButton;