import React from 'react';
import './RestoreButton.css';

const RestoreButton = ({ setDefaultDisplaySettings }: Props) => {
  return (
    <div className='RestoreButton'>
        <div className='RestoreButtonButton' onClick={() => setDefaultDisplaySettings()}>
            <label className='RestoreButtonText'>RESET</label>
        </div>
    </div>
  )
}

interface Props {
  setDefaultDisplaySettings: Function;
}

export default RestoreButton;