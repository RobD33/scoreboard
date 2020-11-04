import React from 'react'
import './AddPlayer.css'

const AddPlayer = ({ addPlayerToGroupAndSession} :Props) => {
    const [state, setState] = React.useState({ value: '' });
    return (
        <div className='AddPlayer'>
            <label className='AddPlayerLabel'>
                Add New Player:
                <input
                    className='AddPlayerInput'
                    type="text"
                    value={state.value}
                    onChange={(e) => handleChange(e, setState)}
                />
            </label>
            <button
                className='AddPlayerInputButton'
                onClick={(e) => handleSubmit(state.value, addPlayerToGroupAndSession, setState)}
            >+</button>
        </div>
    )
}

const handleChange = (e:  React.ChangeEvent<HTMLInputElement>, setState: Function): void => {
    setState({ value: e.target.value });
}

const handleSubmit = (value: string, addPlayerToGroupAndSession: Function, setState: Function): void => {
    if(value) {
        addPlayerToGroupAndSession(value)
        setState({ value: '' })
    }
}

interface Props {
    addPlayerToGroupAndSession: Function;
}
export default AddPlayer;