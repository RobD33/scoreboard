import React from 'react';
import Frame from '../../../../Data/Frame';
import OverallStats from './OverallStats/OverallStats';
import './StatsTable.css';
import StatsVsOpponent from './StatsVsOpponent/StatsVsOpponent';

const StatsTable = ({ player, playerFrames, players }: Props) => {

    const opponents = players.filter(name => name !== player)

    return (
        <div className='StatsTable'>
            {opponents.map((opponent: string) => {
                return <StatsVsOpponent opponent={ opponent } key={opponent} playerFrames={ playerFrames }/>
            })}
            <OverallStats player={ player } playerFrames={ playerFrames }/>
        </div>
    )
}

interface Props {
    player: string;
    playerFrames: Frame[];
    players: string[];
}

export default StatsTable;