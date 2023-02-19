import React, { useCallback, useState } from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import Frame from '../../Data/Frame';
import Match from '../../Data/Match';
import Scoreboard from '../Scoreboard/Scoreboard';
import MatchGrid from './MatchGrid/MatchGrid';
import './RoundRobin.css';

const RoundRobin = ({ RRmatches, sessionPlayers, displaySettings, menu, eightball, toggleEightball, addFrameToMatch }: Props) => {
    const [showMatch, setShowMatch] = useState(false);
    const [activeMatchIndex, setActiveMatchIndex] = useState(0);

    const addFrame = useCallback((frame: Frame) => {
        addFrameToMatch(RRmatches[activeMatchIndex], frame)
    }, [activeMatchIndex, addFrameToMatch, RRmatches])

    const activeMatch = RRmatches[activeMatchIndex];
    const { frames } = activeMatch;


    return (
        <div className={`RoundRobin ${showMatch ? 'ShowMatch' : 'ShowGrid'}`}>
            {showMatch ?
            <Scoreboard
                frames = { frames }
                sessionPlayers= { [activeMatch.playerOne, activeMatch.playerTwo] }
                addFrame = { addFrame }
                displaySettings = { displaySettings }
                menu = { menu }
                eightball = { eightball }
                toggleEightball = { toggleEightball }
            /> :
            <MatchGrid
                    showMatch={ showMatch }
                    setShowMatch={ setShowMatch }
                    RRmatches={ RRmatches }
                    sessionPlayers={ sessionPlayers }
                    activeMatch={ activeMatch }
                    setActiveMatchIndex={ setActiveMatchIndex }
            />}
        </div>
    )
}

export default RoundRobin

interface Props {
    RRmatches: Match[];
    sessionPlayers: string[];
    displaySettings: DisplaySettings;
    menu: boolean;
    eightball: boolean;
    toggleEightball: Function;
    addFrameToMatch: Function;
}