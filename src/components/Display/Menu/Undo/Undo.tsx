import React from 'react';
import ModalProps from '../../../../Data/ModalProps';
import './Undo.css'

const Undo = ({ setModalProps, setMenuState, removeLastFrame }: Props) => {

    const modalProps: ModalProps = {
        message: 'Delete last played frame?',
        positiveButtonText: 'Yes',
        negativeButtonText: 'No',
        positiveCallback: ()=> {removeLastFrame();setMenuState(false)},
        negativeCallback: ()=>{},
        active: true
    }

    return (
        <div className='Undo'>
            <button className='MenuButton' onClick={() => {setModalProps(modalProps)}}>Undo</button>
        </div>
    )
}



interface Props {
    setModalProps: Function;
    setMenuState: Function;
    removeLastFrame: Function;
}

export default Undo;