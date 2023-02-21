import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayProps from '../../Data/DisplayProps';
import DisplaySettings from '../../Data/DisplaySettings';
import Frame from '../../Data/Frame';
import Match from '../../Data/Match';
import Display from '../Display/Display';
import Scoreboard from '../Scoreboard/Scoreboard';
import MatchGrid from './MatchGrid/MatchGrid';
import './RoundRobin.css';
import Table from './Table/Table';
import TableRow from './Table/TableRow/TableRow';

const RoundRobin = ({ displayProps, RRmatches, sessionPlayers, displaySettings, menu, eightball, toggleEightball, addFrameToMatch, setMatchWinner }: Props) => {
    const [activeMatchIndex, setActiveMatchIndex] = useState(0);

    const addFrame = useCallback((frame: Frame) => {
        addFrameToMatch(RRmatches[activeMatchIndex], frame)
    }, [activeMatchIndex, addFrameToMatch, RRmatches])

    const activeMatch = RRmatches[activeMatchIndex];
    const { frames, winner } = activeMatch;

    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <Display
                        displayProps={{...displayProps }}
                    >
                        <div  className={'RoundRobin'}>
                            <MatchGrid
                                RRmatches={ RRmatches }
                                sessionPlayers={ sessionPlayers }
                                activeMatch={ activeMatch }
                                setActiveMatchIndex={ setActiveMatchIndex }
                            />
                            <div className='RRTableHeader'>
                                <TableRow
                                    name={''}
                                    played={'P'}
                                    won={'W'}
                                    lost={'L'}
                                    frameDiff={'+/-'}
                                    eightballs={'8'}
                                    points={'PTS'}
                                />
                            </div>
                            <Table
                                RRmatches={ RRmatches }
                                sessionPlayers={ sessionPlayers }
                            />
                        </div>
                    </Display>
                }/>
                <Route path='/match' element={
                    <Display
                    displayProps={{...displayProps, showEBT: true }}
                    >
                    <Scoreboard
                        frames = { frames }
                        sessionPlayers= { [activeMatch.playerOne, activeMatch.playerTwo] }
                        addFrame = { addFrame }
                        displaySettings = { displaySettings }
                        menu = { menu }
                        eightball = { eightball }
                        toggleEightball = { toggleEightball }
                        winner={ winner }
                    /> 
                    </Display>
                }/>
            </Routes>
        </div>
    )
}

export default RoundRobin

interface Props {
    displayProps: DisplayProps;
    RRmatches: Match[];
    sessionPlayers: string[];
    displaySettings: DisplaySettings;
    menu: boolean;
    eightball: boolean;
    toggleEightball: Function;
    addFrameToMatch: Function;
    setMatchWinner: Function;
}