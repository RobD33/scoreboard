import React from "react";
import Match from "../../../../Data/Match";
import { playerNumberHashMap } from "../../../../utils/hashMaps";
import './MatchThumb.css'

const MatchThumb = ({ match, matchIndex, activeMatch, setActiveMatchIndex, sessionPlayers, setShowMatch }: Props) => {

    const { playerOne, playerTwo, winner } = match;
    const topPlayer = playerNumberHashMap[sessionPlayers.indexOf(playerOne) + 1]
    const bottomPlayer = playerNumberHashMap[sessionPlayers.indexOf(playerTwo) + 1]

    const onClick = () => {
        if(!winner) {
            setActiveMatchIndex(matchIndex);
            setShowMatch(true);
        }
    }

    const getScore = (player: string) => {
        return match.frames.filter(frame => frame.winner === player).length
    }

    return (
        <div
            className={`MatchThumb ${(match === activeMatch) ? 'active':''}`}
            onClick={ onClick }
        >
            <div className="innerMatchThumb">
                <label className={`topPlayer ${topPlayer}`}>{`${playerOne} ${getScore(playerOne)}`}</label>
                <label>Vs</label>
                <label className={`bottomPlayer ${bottomPlayer}`}>{`${playerTwo} ${getScore(playerTwo)}`}</label>
            </div>
        </div>
    )
}

interface Props {
    match: Match;
    activeMatch: Match;
    setActiveMatchIndex: Function;
    sessionPlayers: string[];
    setShowMatch: Function;
    matchIndex: number;
}

export default MatchThumb