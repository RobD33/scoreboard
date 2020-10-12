import React from 'react'

const PlayerTag = ({ player } :Props) => {
return (<div>{player}</div>)
}

interface Props {
    player: string;
}
export default PlayerTag