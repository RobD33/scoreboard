import React from 'react';
import './EightballScoreDisplay.css'

const EightballScoreDisplay = ({ eightballScore }: Props) => {
    return (
        <div className='EightballScoreDisplay'>
            <label className='eightballIconLabel'>
                <span className='eightballIcon'
                    role='img'
                    aria-label='8ball'
                >🎱</span>
            </label>
            <label className='eightballScoreLabel'>
                {eightballScore}
            </label>
        </div>
    )
}

interface Props {
    eightballScore: number;
}

export default EightballScoreDisplay;