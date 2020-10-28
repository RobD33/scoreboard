import React from 'react';
import ModalProps from '../../Data/ModalProps';
import './Modal.css';

const Modal = ({ message, positiveButtonText, negativeButtonText, positiveCallback, negativeCallback, active, closeModal}: Props) => {
    return active ? (
        <div>
        <div className='overlay'></div>
            <div className='popUp'>
                <label className='message'>{message}</label>
                <button className='positiveButton' onClick={(e) => closeModalAndExecuteCallback(closeModal, positiveCallback)}>{positiveButtonText}</button>
                <button className='negativeButton' onClick={(e) => closeModalAndExecuteCallback(closeModal, negativeCallback)}>{negativeButtonText}</button>
            </div>
        </div>
    ) : null
}

const closeModalAndExecuteCallback = (closeModal: Function, callback: Function): void => {
    closeModal()
    callback()
}

interface Props extends ModalProps {
    closeModal: Function;
}


export default Modal;