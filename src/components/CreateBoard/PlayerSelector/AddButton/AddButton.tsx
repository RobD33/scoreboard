import React from 'react'

const AddButton = ({ addPlayerToState, player }: Props) => {
    return <button onClick={(e) => addPlayerToState(player)}>+</button>
}

interface Props {
    addPlayerToState: Function;
    player: string;
}

export default AddButton;