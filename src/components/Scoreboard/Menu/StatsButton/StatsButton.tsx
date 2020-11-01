import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './StatsButton.css';

const StatsButton = () => {
    const history = useHistory();
    const redirectToSessionStats = useCallback(() => history.push('/sessionstats'), [history]);

    return (
        <div className='StatsButton'>
            <button
                onClick={ redirectToSessionStats }
                className='StatsButtonButton'
            >Stats</button>
        </div>
    )
}


export default StatsButton;