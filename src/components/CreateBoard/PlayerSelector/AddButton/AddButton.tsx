import React from 'react'
import './AddButton.css'

const AddButton = ({ addPlayerToSession, player }: Props) => {
    return (
        <div className='AddButton' onClick={() => addPlayerToSession(player)}>
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
    addPlayerToSession: Function;
    player: string;
}

export default AddButton;