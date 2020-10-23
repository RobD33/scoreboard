import React from 'react'
import './PlayerScore.css'

const PlayerScore = ({ playerFrames, createFrameAndToggleEightball, opponents, addFrame } :Props) => {
    return (
        <label className='PlayerScore'
            onClick={(e) => {if(opponents.length === 1) addFrame(createFrameAndToggleEightball(opponents[0]))}}
        >
            {playerFrames.length}
        </label>
    )
}

interface Props {
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    createFrameAndToggleEightball: Function;
    opponents: string[];
    addFrame: Function;
}

export default PlayerScore