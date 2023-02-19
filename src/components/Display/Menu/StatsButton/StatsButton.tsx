import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './StatsButton.css';

const StatsButton = () => {
    const navigate = useNavigate();
    const redirectToSessionStats = useCallback(() => navigate('/sessionstats'), [navigate]);

    return (
        <div className='StatsButton'>
            <button
                onClick={ redirectToSessionStats }
                className='MenuButton'
            >Stats</button>
        </div>
    )
}


export default StatsButton;