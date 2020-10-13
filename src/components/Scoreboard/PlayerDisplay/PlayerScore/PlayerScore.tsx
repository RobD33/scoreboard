import React from 'react'

const PlayerScore = ({ playerFrames, createFrameAndToggleEightball, opponents, addFrame } :Props) => {
    return (
        <button 
            onClick={(e) => addFrame(createFrameAndToggleEightball(opponents[0]))}
            disabled={opponents.length > 1}
        >
            {playerFrames.length}
        </button>
    )
}

interface Props {
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    createFrameAndToggleEightball: Function;
    opponents: string[];
    addFrame: Function;
}

export default PlayerScore