import React from "react";
import Match from "../../../Data/Match";
import MatchThumb from "./MatchThumb/MatchThumb";
import './MatchGrid.css'

const MatchGrid = ({ setShowMatch, RRmatches, sessionPlayers, activeMatch, setActiveMatchIndex }: Props) => {
    return (
        <div className="MatchGrid" style={{ gridTemplateColumns: `repeat(${sessionPlayers.length - 1}, 1fr)` }}>
            {RRmatches.map((match, matchIndex) => {
                return (
                    <MatchThumb
                            key={matchIndex}
                            matchIndex={matchIndex}
                            match={match}
                            activeMatch={activeMatch}
                            setActiveMatchIndex={setActiveMatchIndex}
                            sessionPlayers={sessionPlayers}
                            setShowMatch={setShowMatch}
                    />
                )
            })}
        </div>
    )
}

interface Props {
    showMatch: Boolean;
    setShowMatch: Function;
    RRmatches: Match[];
    sessionPlayers: string[];
    activeMatch: Match;
    setActiveMatchIndex: Function;
}

export default MatchGrid