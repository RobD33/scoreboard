import React from 'react';
import { numberOfPlayersHashMap, opponentNumberHashMap, playerNumberHashMap } from '../../../../../utils/hashMaps'
import './OpponentDisplay.css'

const OpponentDisplay = ({ recordFrame, opponentNumber, opponentPlayerNumber, opponent, showScore, score, numberOfPlayers}: Props) => {
    return (
        <div onClick={(e) => recordFrame()} className={`OpponentDisplay ${opponentNumberHashMap[opponentNumber]} ${playerNumberHashMap[opponentPlayerNumber]} ${numberOfPlayersHashMap[numberOfPlayers]}`}>
            <label className='opponentName'>{opponent}</label>
            {showScore && <label className='opponentScore'>{score}</label>}
        </div>
    )
}

interface Props {
    recordFrame: Function;
    opponentNumber: number;
    opponentPlayerNumber: number;
    opponent: string;
    showScore: boolean;
    score: number;
    numberOfPlayers: number;
}

export default OpponentDisplay;