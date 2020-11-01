import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
    return (
        <div className='TableHeader'>
            <div className='cornerCell' />
            <label className='playedHeader'>P</label>
            <label className='wonHeader'>W</label>
            <label className='lostHeader'>L</label>
            <label className='percentHeader'>%</label>
            <label className='eightballHeader'>
                <span role='img' aria-label='8ball'>🎱</span>
            </label>
        </div>
    )
}

export default TableHeader;