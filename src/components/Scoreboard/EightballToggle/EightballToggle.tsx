import React from 'react'

const EightballToggle = ({ toggleEightball, eightball }: Props) => {
    return (
        <div>
            <button onClick={(e) => toggleEightball()} style={{color: eightball? 'red':'black'}}>8ball</button>
        </div>
    )
}

interface Props {
    toggleEightball: Function;
    eightball: boolean;
}

export default EightballToggle;