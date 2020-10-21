import React from 'react'
import DisplaySettings from '../../../../Data/DisplaySettings'
import Frame from '../../../../Data/Frame'
import OpponentDisplay from './OpponentDisplay/OpponentDisplay'
import { numberOfPlayersHashMap } from '../../../../utils/hashMaps'
import './OpponentsSelector.css'

const OpponentsSelector = ({ addFrame, createFrameAndToggleEightball, sessionPlayers, player, frames, displaySettings }: Props) => {
    return (
        <div className={`OpponentsSelector ${numberOfPlayersHashMap[sessionPlayers.length]}`}>
            {opponents(player, sessionPlayers).map((opponent, index) => {
                return (
                    <OpponentDisplay
                        key={opponent}
                        opponentNumber={ index + 1 }
                        recordFrame={ () => addFrame(createFrameAndToggleEightball(opponent)) }
                        opponentPlayerNumber={ sessionPlayers.indexOf(opponent) + 1}
                        opponent={ opponent }
                        showScore={ displaySettings.individualScores }
                        score={ score(player, opponent, frames) }
                        numberOfPlayers={ sessionPlayers.length }
                    />
                )
            })}
        </div>
    )
}

const score = (player: string, opponent: string, frames: Frame[]): number => {
    return frames.filter(frame => frame.winner === player && frame.loser === opponent).length
}

const opponents = (player: string, sessionPlayers: string[]): string[] => {
    return sessionPlayers.filter(playerName => playerName !== player)
}

interface Props {
    addFrame: Function;
    createFrameAndToggleEightball: Function;
    sessionPlayers: string[];
    player: string;
    frames: Frame[];
    displaySettings: DisplaySettings;
}

export default OpponentsSelector