import React from 'react'
import OpponentsSelector from './OpponentsSelector/OpponentsSelector'
import PlayerScore from './PlayerScore/PlayerScore'
import PlayerTag from './PlayerTag/PlayerTag'
import './PlayerDisplay.css'
import DisplaySettings from '../../../Data/DisplaySettings'
import EightballScoreDisplay from './EightballScoreDisplay/EightballScoreDisplay'

const PlayerDisplay = ({ player, playerFrames, opponents, addFrame, eightball, toggleEightball, displaySettings, playerNumber, sessionPlayers } :Props) => {
    return (
        <div className={`PlayerDisplay player${classNameHashMap[playerNumber]} ${classNameHashMap[opponents.length + 1]}Player`}>
            <PlayerTag player={player} numberOfPlayers={opponents.length + 1}/>
            {opponents.length > 1 &&
                <OpponentsSelector
                    opponents={ opponents }
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={ createFrameAndToggleEightball(player, eightball, toggleEightball) }
                    playerNumber={ playerNumber }
                    sessionPlayers={ sessionPlayers }
                />
            }
            {(displaySettings.totalScores || opponents.length === 1) &&
                <PlayerScore
                    playerFrames={playerFrames}
                    addFrame={ addFrame }
                    createFrameAndToggleEightball={createFrameAndToggleEightball(player, eightball, toggleEightball)}
                    opponents={ opponents }
                />
            }
            {displaySettings.eightballClears &&
                <EightballScoreDisplay player={ player } playerFrames={playerFrames} />
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

const classNameHashMap: { [value: number] : string } = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six'
}

interface Props {
    player: string;
    playerFrames: { winner: string, loser: string, eightball: boolean }[];
    opponents: string[];
    addFrame: Function;
    eightball: boolean;
    toggleEightball: Function;
    displaySettings: DisplaySettings;
    playerNumber: number;
    sessionPlayers: string[];
}


export default PlayerDisplay;