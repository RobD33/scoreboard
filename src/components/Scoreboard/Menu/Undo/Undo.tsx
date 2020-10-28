import React from 'react';
import Frame from '../../../../Data/Frame';
import ModalProps from '../../../../Data/ModalProps';
import './Undo.css'

const Undo = ({ setModalProps, frames }: Props) => {

    const modalProps: ModalProps = {
        message: 'Delete last played frame?',
        positiveButtonText: 'Yes',
        negativeButtonText: 'No',
        positiveCallback: ()=>{frames.length && frames.pop()},
        negativeCallback: ()=>{},
        active: true
    }

    return (
        <div className='Undo'>
            <button className='UndoButton' onClick={(e) => setModalProps(modalProps)}>Undo</button>
        </div>
    )
}



interface Props {
    setModalProps: Function;
    frames: Frame[];
}

export default Undo;