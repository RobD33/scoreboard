import React from 'react';
import ModalProps from '../../../Data/ModalProps';
import './ClearPlayers.css';

const ClearPlayers = ({ setModalProps, clearAllPlayers }: Props) => {

  const modalProps: ModalProps = {
    message: 'Warning: This will remove all players, are you sure?',
    positiveButtonText: 'Yes',
    negativeButtonText: 'No',
    positiveCallback: clearAllPlayers,
    negativeCallback: () => {},
    active: true
  }

  return (
    <div className='ClearPlayers'>
      <label
        className='ClearPlayersButton'
        onClick={() => setModalProps(modalProps)}
      >CLEAR ALL</label>
    </div>
  )
}

interface Props {
  setModalProps: Function;
  clearAllPlayers: Function;
}

export default ClearPlayers;