import React from 'react'

const OpponentsSelector = ({ opponents, addFrame, createFrameAndToggleEightball }: Props) => {
    return (
        <div>
            {opponents.map(opponent => {
                return (
                    <div key={ opponent }>
                        <button onClick={ (e) =>  addFrame(createFrameAndToggleEightball(opponent)) }>{ opponent }</button>
                    </div>
                )
            })}
        </div>
    )
}

interface Props {
    opponents: string[];
    addFrame: Function;
    createFrameAndToggleEightball: Function;
}

export default OpponentsSelector