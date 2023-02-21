import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import Match from "../../../Data/Match";
import SessionType from "../../../Data/SessionType";

const SelectButton = ({ sessionType, index, setSessionType, createRoundRobin, RRmatches }: Props) => {
    const navigate = useNavigate();

    const initRR = () => {
        if (sessionType === SessionType.roundRobin && !RRmatches.length) {
            createRoundRobin()
        }
    }
    const path = `/${sessionType.replaceAll(' ', '').toLowerCase()}`

    const handleSelect = useCallback(() => {
        setSessionType(sessionType)
        navigate(path)
    },[navigate, sessionType, setSessionType, path])

    return (
        <div className={`SelectButton type${index}`}>
            <label onClick={() => { handleSelect(); initRR()}}>
                {sessionType}
            </label>
        </div>
    )
}

interface Props {
    sessionType: SessionType;
    index: number;
    setSessionType: Function;
    createRoundRobin: Function;
    RRmatches: Match[];
}

export default SelectButton