import React from "react";
import './TableRow.css'

const TableRow = ({ name, played, won, lost, frameDiff, eightballs, points, className }: Props) => {
  return (
    <div className={`TableRow ${className}`}>
      <label className="RRname">{name}</label>
      <label className="RRplayed">{played}</label>
      <label className="RRwon">{won}</label>
      <label className="RRlost">{lost}</label>
      <label className="RRframeDiff">{frameDiff}</label>
      <label className="RReightballs">{eightballs}</label>
      <label className="RRpoints">{points}</label>
    </div>
  )
}

interface Props {
  name: string;
  played: number | string;
  won: number | string;
  lost: number | string;
  frameDiff: number | string;
  eightballs: number | string;
  points: number | string;
  className: string;
}

export default TableRow