import React from 'react'

const AddPlayer = ({ addPlayerToGroup, addPlayerToSession } :Props) => {
    const [state, setState] = React.useState({value: ''});
    return (
        <div>
            <label>
                Add Player:
                <input type="text" value={state.value} onChange={(e) => handleChange(e, setState)} />
            </label>
            <button onClick={(e) => handleSubmit(state.value, addPlayerToGroup, addPlayerToSession,setState)}>+</button>
        </div>
    )
}

const handleChange = (e: any, setState: Function) => {
    setState({ value: e.target.value });
}

const handleSubmit = (value: string, addPlayerToGroup: Function, addPlayerToSession: Function, setState: Function): void => {
    if(value) {
        addPlayerToGroup(value)
        addPlayerToSession(value)
        setState({ value: '' })
    }
}

interface Props {
    addPlayerToGroup: Function;
    addPlayerToSession: Function;
}
export default AddPlayer;