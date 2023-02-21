import React from 'react';
import DisplaySettings from '../../Data/DisplaySettings';
import PlayerDisplay from './PlayerDisplay/PlayerDisplay';
import './Scoreboard.css';
import { numberOfPlayersHashMap } from '../../utils/hashMaps';

const Scoreboard = ({ frames, sessionPlayers, addFrame, displaySettings, menu, eightball, toggleEightball, winner }: Props) => {

    return (
        <div className={`Scoreboard ${numberOfPlayersHashMap[sessionPlayers.length]}`}>
            {sessionPlayers.map((player, index) => {
                return <PlayerDisplay
                    key={ index }
                    playerNumber={ index + 1 }
                    player={ player }
                    opponents={ getOpponents(player, sessionPlayers) }
                    addFrame={ checkForMenu(addFrame, menu) }
                    eightball={ eightball }
                    toggleEightball={ toggleEightball }
                    displaySettings={ displaySettings }
                    sessionPlayers={sessionPlayers}
                    frames={ frames }
                />
            })}
            {sessionPlayers.length === 2 &&
                <div className='dash'>
                    -
                </div>
            }
            { winner && <div className='winnerOverlay'>
                <div className='winnerBanner'>{`* ${winner} wins! *`}</div>
                </div>
            }
        </div>
    )
}

const getOpponents = (player: string, sessionPlayers: string[]) => {
    return sessionPlayers.filter(sessionPlayer => sessionPlayer !== player)
}

const checkForMenu = (addFrame: Function, menu: boolean): Function => {
    if(menu) return () => {}
    else return addFrame;
}

interface Props {
    frames: { winner: string, loser: string, eightball: boolean }[];
    sessionPlayers: string[];
    addFrame: Function;
    displaySettings: DisplaySettings;
    menu: boolean;
    eightball: boolean;
    toggleEightball: Function;
    winner: string | undefined;
}

export default Scoreboard