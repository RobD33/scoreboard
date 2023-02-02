import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = ({ createNewSession, sessionValid }: Props) => {
    const navigate = useNavigate();

    const handleNew = useCallback(() => {
        createNewSession();
        navigate('createboard');
    }, [createNewSession, navigate])

    const handleContinue = useCallback(() => {
        if (sessionValid) navigate('scoreboard')
    }, [sessionValid, navigate])

    const handleLogin = useCallback(() => {
        navigate('login')
    },[navigate])

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