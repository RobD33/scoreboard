import React from 'react'

const OpponentsSelector = ({ opponents }: Props) => {
    return (
        <div>
            {opponents.map(opponent => {
                return (
                    <div>
                        { opponent}
                    </div>
                )
            })}
        </div>
    )
}

interface Props {
    opponents: string[];
}

export default OpponentsSelector