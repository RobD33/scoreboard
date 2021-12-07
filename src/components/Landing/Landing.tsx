import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

const Landing = ({ createNewSession, sessionValid }: Props) => {
    const history = useHistory();
    const redirectTo = useCallback((path) => history.push(path), [history]);

    const handleNew = useCallback(() => {
        createNewSession();
        redirectTo('createboard');
    }, [createNewSession, redirectTo])

    const handleContinue = useCallback(() => {
        if (sessionValid) redirectTo('scoreboard')
    }, [redirectTo, sessionValid])

    const handleLogin = useCallback(() => {
        redirectTo('login')
    },[redirectTo])

    return (
        <div className='Landing'>
            <label className='login' onClick={e => handleLogin()}>Log In</label>
            <label className='title'>PoolTracker</label>
            <label className='new' onClick={(e) => handleNew()}>Create New Session</label>
            <label className={`continue ${!sessionValid && 'noSession'}`} onClick={(e) => handleContinue()}>Continue Last Session</label>
        </div>
    )
}

interface Props {
    createNewSession: Function;
    sessionValid: boolean;
}

export default Landing;