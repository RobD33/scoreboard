import React from 'react'

const PlayerScore = ({ playerFrames } :Props) => {
    return (
        <div>
            {playerFrames.length}
        </div>
    )
}

interface Props {
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
}

export default PlayerScore