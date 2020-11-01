import React from 'react';
import Frame from '../../../Data/Frame';
import './PlayerStats.css'
import StatsHeader from './StatsHeader/StatsHeader';
import StatsTable from './StatsTable/StatsTable';
import TableHeader from './TableHeader/TableHeader';

const PlayerStats = ({ frames, player, className, players }: Props) => {

    const playerFrames = frames.filter((frame: Frame) => frame.winner === player || frame.loser === player);

    return (
        <div className={`PlayerStats ${className}`}>
            <StatsHeader player={ player } />
            <TableHeader />
            <StatsTable
                player={ player }
                playerFrames={ playerFrames }
                players={ players }
            />
        </div>
    )
}
interface Props {
    frames: Frame[];
    player: string;
    className: string;
    players: string[];
}
export default PlayerStats;