import React from "react";
import Match from "../../../Data/Match";
import './Table.css'
import TableRow from "./TableRow/TableRow";

const Table = ({ RRmatches, sessionPlayers }: Props) => {

  const rows = sessionPlayers.map((player) => {
    const playedMatches = RRmatches.filter(match => (match.playerOne === player || match.playerTwo === player))
    const won = playedMatches.filter(match => match.winner === player).length;
    const lost = playedMatches.filter(match => match.winner).length - won;
    const played = won + lost;
    const points = won * 3

    let wonFrame = 0;
    let lostFrame = 0;
    let eightballs = 0
    playedMatches.forEach(match => {
      if (match.frames.length) {
        match.frames.forEach(frame => {
          if (frame.winner === player) {
            wonFrame++
            if (frame.eightball) {
              eightballs++
            }
          } else {
            lostFrame++
          }
        })
      }
    })

    const frameDiff = wonFrame - lostFrame;
    return {
    name: player,
    played,
    won,
    lost,
    frameDiff,
    eightballs,
    points,
  }
  }).sort((a, b) => {
    if (a.points > b.points) return -1;
    if (b.points > a.points) return 1;
    if (a.frameDiff > b.frameDiff) return -1;
    if (b.frameDiff > a.frameDiff) return 1;
    if (a.eightballs > b.eightballs) return -1;
    if (b.eightballs > a.eightballs) return 1;
    return 0;
  })

  return (
    <div className="Table" style={{ gridTemplateRows: `repeat(${sessionPlayers.length}, 1fr)` }}>
      {rows.map(row => {
        return (<TableRow
          {...row}
        />)
      })}
    </div>
  )
}

interface Props {
  RRmatches: Match[];
  sessionPlayers: string[];
}

export default Table