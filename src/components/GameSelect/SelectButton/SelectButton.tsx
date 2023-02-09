import React from "react";
import SessionType from "../../../Data/SessionType";

const SelectButton = ({ sessionType, index }: Props) => {
    return (
        <div className={`SelectButton type${index}`}>
            <label>
                {sessionType}
            </label>
        </div>
    )
}

interface Props {
    sessionType: SessionType;
    index: number;
}

export default SelectButton