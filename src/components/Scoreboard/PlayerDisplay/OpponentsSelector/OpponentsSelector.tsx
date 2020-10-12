import React from 'react'

const OpponentsSelector = ({ scores } :Props) => {
    return (
        <div>
            {Object.keys(scores).map(player => {
                return (
                    <div>{player}</div>
                )
            })}
        </div>
    )
}

interface Props {
    scores: {};
}

export default OpponentsSelector