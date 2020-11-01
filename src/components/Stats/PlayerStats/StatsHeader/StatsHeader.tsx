import React from 'react';
import './StatsHeader.css';

const StatsHeader = ({ player }: Props) => {
    return (
        <div className='StatsHeader'>
            <label className='playerName'>{player}</label>
        </div>
    )
}

interface Props {
    player: string;
}

export default StatsHeader;