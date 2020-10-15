import React from 'react'
import './PlayerScore.css'

const PlayerScore = ({ playerFrames, createFrameAndToggleEightball, opponents, addFrame } :Props) => {
    return (
        <button className={`PlayerScore ${classNameHashMap[opponents.length + 1]}`}
            onClick={(e) => addFrame(createFrameAndToggleEightball(opponents[0]))}
            disabled={opponents.length > 1}
        >
            {playerFrames.length}
        </button>
    )
}

const classNameHashMap: { [index: number]: string} = {
    2: 'twoPlayerScore',
    3: 'threePlayerScore',
    4: 'fourPlayerScore',
    5: 'fivePlayerScore',
    6: 'sixPlayerScore'  
}

interface Props {
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    createFrameAndToggleEightball: Function;
    opponents: string[];
    addFrame: Function;
}

export default PlayerScore