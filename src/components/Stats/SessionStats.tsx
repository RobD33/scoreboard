import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Frame from '../../Data/Frame';
import BackButton from '../Common/BackButton/BackButton';
import PlayerStats from './PlayerStats/PlayerStats';
import './SessionStats.css';

const SessionStats = ({ frames, sessionPlayers }: Props) => {

    const history = useHistory()
    const redirectToScoreboard = useCallback(() => history.push('/scoreboard'), [history]);

    const [playersIndex, setPlayersIndex] = useState(0)

    const players: string[] = frames.reduce((acc: string[], frame: Frame) => {
        if(!acc.includes(frame.winner)) acc.push(frame.winner)
        if(!acc.includes(frame.loser)) acc.push(frame.loser)
        return acc
    },[ ...sessionPlayers ])

    const lastIndex: number = players.length - 1;

    const sanitizeIndex = useCallback((index: number) => {
        if (index < 0) return lastIndex;
        if (index > lastIndex) return 0
        return index
    }, [lastIndex])

    const indexesToDisplay: number[] = [ sanitizeIndex(playersIndex - 1), playersIndex, sanitizeIndex(playersIndex + 1) ]

    const positionHasMap: {[index: number]: string} = {
        0: 'left',
        1: 'middle',
        2: 'right'
    }

    const changePlayersIndex = useCallback((increment) => {
        setPlayersIndex(playersIndex => sanitizeIndex(playersIndex + increment))
    }, [sanitizeIndex])

    return (
        <div className='SessionStats'>
            <div onClick={() => changePlayersIndex(-1)} className='leftButton'>
                <div className='leftArrow'/>
            </div>
            <div onClick={() => changePlayersIndex(1)} className='rightButton'>
                <div className='rightArrow'/>
            </div>
            <BackButton onClick={ redirectToScoreboard }/>
            {indexesToDisplay.map((indexToDisplay, index)=> {
                return (
                    <PlayerStats
                        key={ players[indexToDisplay] }
                        player={ players[indexToDisplay] }
                        className={ positionHasMap[index] }
                        frames={ frames }
                        players={ players }
                    />
                )
            })}
        </div>
    )
}

interface Props {
    frames: Frame[];
    sessionPlayers: string[];
}

export default SessionStats;