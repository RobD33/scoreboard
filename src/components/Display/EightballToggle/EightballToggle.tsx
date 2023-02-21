import React from 'react'
import './EightballToggle.css'

const EightballToggle = ({ toggleEightball, eightball }: Props) => {
    return (
        <div className='EightballToggle'>
            <button
                onClick={(e) => toggleEightball()}
                className={`ToggleButton ${eightball ? 'highlight' : 'normal'}`}
            >
                <span className='emoji'
                    role='img'
                    aria-label='8ball'
                >🎱</span>
            </button>
        </div>
    )
}

interface Props {
    toggleEightball: Function;
    eightball: boolean;
}

export default EightballToggle;