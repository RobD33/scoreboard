import React from 'react'

const PlayerScore = ({ playerFrames } :Props) => {
    return (
        <div>
            0
        </div>
    )
}

interface Props {
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
}

export default PlayerScore