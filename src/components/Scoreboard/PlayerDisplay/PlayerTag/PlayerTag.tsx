import React from 'react'
import './PlayerTag.css'

const PlayerTag = ({ player, numberOfPlayers } :Props) => {
return (
    <div className={`PlayerTag ${classNameHashMap[numberOfPlayers]}`}>
        {player}
    </div>
    )
}

const classNameHashMap: { [index: number]: string} = {
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
}

interface Props {
    player: string;
    numberOfPlayers: number;
}
export default PlayerTag