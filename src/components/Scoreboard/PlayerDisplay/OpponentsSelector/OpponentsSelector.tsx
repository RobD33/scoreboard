import React from 'react'
import './OpponentsSelector.css'

const OpponentsSelector = ({ opponents, addFrame, createFrameAndToggleEightball, playerNumber, sessionPlayers }: Props) => {
    return (
        <div className={`OpponentsSelector ${classNameHashMap[opponents.length - 1]}Opponents`}>
            {opponents.map((opponent, index) => {
                return (
                    <div key={ opponent }>
                        <button
                            className={`OpponentsSelectorButton Opponent${classNameHashMap[index]} ${classNameHashMap[opponents.length - 1]}OpponentsButton player${classNameHashMap[sessionPlayers.indexOf(opponent)]}`}
                            onClick={ (e) =>  addFrame(createFrameAndToggleEightball(opponent)) }
                        >{ opponent }</button>
                    </div>
                )
            })}
        </div>
    )
}

const classNameHashMap: { [index: number]: string} = {
    0: 'One',
    1: 'Two',
    2: 'Three',
    3: 'Four',
    4: 'Five',
}


interface Props {
    opponents: string[];
    addFrame: Function;
    createFrameAndToggleEightball: Function;
    playerNumber: number;
    sessionPlayers: string[];
}

export default OpponentsSelector