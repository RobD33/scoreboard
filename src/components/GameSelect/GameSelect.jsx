import React from 'react'
import SessionType from '../../Data/SessionType'
import './GameSelect.css'
import SelectButton from './SelectButton/SelectButton'

const GameSelect = () => {
    return (
        <div className='GameSelect'>
            { Object.values(SessionType).map((sessionType, index) => {
                return <SelectButton
                    sessionType={ sessionType }
                    index={ index }
                />
            })}
        </div>
    )
}

export default GameSelect