import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'
import './PlayerDisplay.css'
import DisplaySettings from '../../../Data/DisplaySettings'
import EightballScoreDisplay from './EightballScoreDisplay/EightballScoreDisplay'
import Frame from '../../../Data/Frame'
import { playerNumberHashMap } from '../../../utils/hashMaps'

const PlayerDisplay = ({ player, opponents, addFrame, eightball, toggleEightball, displaySettings, playerNumber, sessionPlayers, frames } :Props) => {

    const framesVsOpponents = frames.filter(frame => frame.winner === player && opponents.includes(frame.loser));
    const eightballScore = framesVsOpponents.filter(frame => frame.eightball).length;
    const score = framesVsOpponents.length;

    return (
        <div className={`PlayerDisplay ${playerNumberHashMap[playerNumber]}`}>
            <PlayerTag player={player} numberOfPlayers={opponents.length + 1}/>
            {opponents.length > 1 &&
                <OpponentsSelector
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={ createFrameAndToggleEightball(player, eightball, toggleEightball) }
                    sessionPlayers={ sessionPlayers }
                    player={ player }
                    frames={ frames }
                    displaySettings={ displaySettings }
                />
            }
            {(displaySettings.totalScores || opponents.length === 1) &&
                <PlayerScore
                    score={ score }
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={createFrameAndToggleEightball(player, eightball, toggleEightball)}
                    opponents={ opponents }
                />
            }
            {displaySettings.eightballClears &&
                <EightballScoreDisplay eightballScore={eightballScore} />
            }
        </div>
    )
}

const createFrameAndToggleEightball = (player: string, eightball: boolean, toggleEightball: Function): Function => {
    return (opponent: string): { winner: string, loser: string, eightball: boolean } => {
        const frameEightball = eightball
        if(eightball) toggleEightball()
        return { winner: player, loser: opponent, eightball: frameEightball }
    }
}

interface Props {
    player: string;
    opponents: string[];
    addFrame: Function;
    eightball: boolean;
    toggleEightball: Function;
    displaySettings: DisplaySettings;
    playerNumber: number;
    sessionPlayers: string[];
    frames: Frame[];
}


export default PlayerDisplay;