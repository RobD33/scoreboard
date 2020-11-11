import React from 'react';
import './BackButton.css';

const BackButton = ({ onClick }: Props) => {
    return (
        <div className='BackButton'>
            <div className='BackButtonButton' onClick={() => onClick()}>
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

interface Props {
    onClick: Function;
}

export default BackButton;