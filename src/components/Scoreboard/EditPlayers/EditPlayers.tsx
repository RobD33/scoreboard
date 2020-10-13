import React from 'react'

const EditPlayers = ({ changeComponent }: Props) => {
    return (
        <div>
            <button onClick={ (e) => changeComponent('CreateBoard')}>Edit Players</button>
        </div>
    )
}

interface Props {
    changeComponent: Function;
}

export default EditPlayers;