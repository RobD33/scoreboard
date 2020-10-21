import React from 'react';
import Frame from '../../../../Data/Frame';
import './EightballScoreDisplay.css'

const EightballScoreDisplay = ({ playerFrames }: Props) => {
    return (
        <div className='EightballScoreDisplay'>
            <label className='eightballIconLabel'>
                <span className='eightballIcon'
                    role='img'
                    aria-label='8ball'
                >🎱</span>
            </label>
            <label className='eightballScoreLabel'>
                {`       ${calculateEightballScore(playerFrames)}`}
            </label>
        </div>
    )
}

const calculateEightballScore = (frames: Frame[]): number => {
    return frames.filter(frame => frame.eightball).length
}

interface Props {
    playerFrames: Frame[];
}

export default EightballScoreDisplay;