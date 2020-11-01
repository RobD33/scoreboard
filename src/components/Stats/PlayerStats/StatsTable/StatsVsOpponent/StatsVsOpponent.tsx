import React from 'react';
import Frame from '../../../../../Data/Frame';
import './StatsVsOpponent.css';

const StatsVsOpponent = ({ opponent, playerFrames }: Props) => {
    const wins: number = playerFrames.filter(frame => frame.loser === opponent).length
    const losses: number = playerFrames.filter(frame => frame.winner === opponent).length
    const roundToOne = (num: number): number =>  +(Math.round(Number(num + "e+1"))  + "e-1");
    const percentage: number = roundToOne(wins / (wins + losses) * 100)
    const eightballs: number = playerFrames.filter(frame => frame.loser === opponent && frame.eightball).length

    return (
        <div className='StatsVsOpponent'>
            <label className='statsOpponentName'>{opponent}</label>
            <label className='playedVsOpponent'>{wins + losses}</label>
            <label className='winsVsOpponent'>{wins}</label>
            <label className='lossesVsOpponent'>{losses}</label>
            <label className='percentageVsOpponent'>{isNaN(percentage) ? '--' : percentage}</label>
            <label className='eightballsVsOpponent'>{eightballs}</label>
        </div>
    )
}

interface Props {
    opponent: string;
    playerFrames: Frame[];
}

export default StatsVsOpponent;