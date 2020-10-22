import React, { useEffect } from 'react';
import { opponentNumberHashMap, playerNumberHashMap } from '../../../../../utils/hashMaps'
import './OpponentDisplay.css'

const OpponentDisplay = ({ recordFrame, opponentNumber, opponentPlayerNumber, opponent, showScore, score}: Props) => {
    const [animation, setAnimation] = React.useState(false);

    useEffect(() => {
        setAnimation(true)
      }, [setAnimation]);
    return (
        <div
            className={`OpponentDisplay ${opponentNumberHashMap[opponentNumber]} ${playerNumberHashMap[opponentPlayerNumber]} ${showScore?'withScore':''}`}
            onClick={(e) => {recordFrame(); setAnimation(true)}}
            onAnimationEnd={() => setAnimation(false)}
        >
            <label className={`opponentName ${animation ? 'animation':''}`}>{opponent}</label>
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
}

export default OpponentDisplay;