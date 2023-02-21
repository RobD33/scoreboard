import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <div className='BackButton'>
            <div className='BackButtonButton' onClick={() => navigate(-1)}>
                <div className='arrowHeadWrapper'>
                    <div className='arrowHead' />
                </div>
                <div className='arrowBodyWrapper'>
                    <div className='arrowBody' />
                </div>
                <label className='BackButtonText'>BACK</label>
            </div>
        </div>
    )
}


export default BackButton;