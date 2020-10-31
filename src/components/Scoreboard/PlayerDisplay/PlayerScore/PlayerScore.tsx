import React from 'react'
import './PlayerScore.css'

const PlayerScore = ({ score, createFrameAndToggleEightball, opponents, addFrame } :Props) => {
    return (
        <label className='PlayerScore'
            onClick={(e) => {if(opponents.length === 1) addFrame(createFrameAndToggleEightball(opponents[0]))}}
        >
            {score}
        </label>
    )
}

interface Props {
    score: number;
    createFrameAndToggleEightball: Function;
    opponents: string[];
    addFrame: Function;
}

export default PlayerScore