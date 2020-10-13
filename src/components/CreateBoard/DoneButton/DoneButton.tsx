import React from 'react';

const DoneButton = ({ numberOfSessionPlayers }: Props) => {
    return (
        <div>
            <button disabled={numberOfSessionPlayers < 2}>Done</button>
        </div>
    )
}

interface Props {
    numberOfSessionPlayers: number;
}

export default DoneButton;