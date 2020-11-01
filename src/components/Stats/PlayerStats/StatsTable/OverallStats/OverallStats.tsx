import React from 'react';
import Frame from '../../../../../Data/Frame';
import './OverallStats.css';

const OverallStats = ({ player, playerFrames}: Props) => {

    const wins: number = playerFrames.filter(frame => frame.winner === player).length
    const losses: number = playerFrames.filter(frame => frame.loser === player).length
    const roundToOne = (num: number): number =>  +(Math.round(Number(num + "e+1"))  + "e-1");
    const percentage: number = roundToOne(wins / (wins + losses) * 100)
    const eightballs: number = playerFrames.filter(frame => frame.winner === player && frame.eightball).length

    return (
        <div className='OverallStats'>
            <label className='overallStatsLabel'>Overall</label>
            <label className='playedOverall'>{wins + losses}</label>
            <label className='winsOverall'>{wins}</label>
            <label className='lossesOverall'>{losses}</label>
            <label className='percentageOverall'>{isNaN(percentage) ? '--' : percentage}</label>
            <label className='eightballsOverall'>{eightballs}</label>
        </div>
    )
}

interface Props {
    player: string;
    playerFrames: Frame[];
}

export default OverallStats;