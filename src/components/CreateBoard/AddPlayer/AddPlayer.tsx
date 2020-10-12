import React from 'react'

const AddPlayer = ({ addPlayerToGroupAndSession} :Props) => {
    const [state, setState] = React.useState({value: ''});
    return (
        <div>
            <label>
                Add Player:
                <input type="text" value={state.value} onChange={(e) => handleChange(e, setState)} />
            </label>
            <button onClick={(e) => handleSubmit(state.value, addPlayerToGroupAndSession, setState)}>+</button>
        </div>
    )
}

const handleChange = (e: any, setState: Function) => {
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