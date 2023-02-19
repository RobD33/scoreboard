import React from 'react'
import Match from '../../Data/Match'
import SessionType from '../../Data/SessionType'
import './GameSelect.css'
import SelectButton from './SelectButton/SelectButton'

const GameSelect = ({ setSessionType, createRoundRobin, RRmatches }: Props) => {
    return (
        <div className='GameSelect'>
            { Object.values(SessionType).map((sessionType, index) => {
                return <SelectButton
                    key={ index }
                    sessionType={ sessionType }
                    index={ index }
                    setSessionType={ setSessionType }
                    createRoundRobin={ createRoundRobin }
                    RRmatches= { RRmatches }
                />
            })}
        </div>
    )
}

interface Props {
    setSessionType: Function;
    createRoundRobin: Function;
    RRmatches: Match[];
}

export default GameSelect