import React from 'react'
import './RemoveButton.css'

const RemoveButton = ({ removePlayerFromSession, player }: Props) => {
    return (
        <div className='RemoveButton' onClick={() => removePlayerFromSession(player)}>
            <div className='arrowHeadWrapper'>
                    <div className='arrowHead' />
                </div>
                <div className='arrowBodyWrapper'>
                    <div className='arrowBody' />
                </div>
        </div>
    )
}

interface Props {
    removePlayerFromSession: Function;
    player: string;
}

export default RemoveButton;