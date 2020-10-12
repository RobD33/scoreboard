import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const [appState, setAppState] = React.useState(generateNewAppState());

  return (
    <div>
      {appState.sessionInProgress ? 
        <Scoreboard 
          frames={ appState.frames }
          sessionPlayers={ appState.sessionPlayers }
        /> :
        <CreateBoard
          addPlayerToSession={ addPlayerToSession(appState,setAppState) }
          listOfPotentialPlayers={ getListOfPotentialPLayers(appState) }
          sessionPlayers={ appState.sessionPlayers }
          addPlayerToGroup={ addPlayerToGroup }
        />
      }
    </div>
  );
}

const generateNewAppState = (): AppState => {
  return {
    sessionInProgress: false,
    frames: [],
    groupPlayers: getGroupPlayers(),
    sessionPlayers: []
  }
}

const addPlayerToSession = (appState : AppState , setAppState : Function) => {
  return (player: string) => {
    const sessionPlayers = [ ...appState.sessionPlayers, player ]
    appState = { ...appState, sessionPlayers }
    setAppState(appState)
  }
}

const getListOfPotentialPLayers = (appState: AppState) => {
  return appState.groupPlayers.filter(player => !appState.sessionPlayers.includes(player))
}

const addPlayerToGroup = (appState: AppState, setAppState: Function) => {
  return (player: string) => {
    const groupPlayers = [ ...appState.groupPlayers, player ]
    appState = { ...appState, groupPlayers }
    setAppState(appState)
  }
}

const getGroupPlayers = () => {
  return ['Rob', 'Jamie', 'Bails','JP']
}

interface AppState {
  sessionInProgress: boolean;
  frames: { winner: string, loser: string, eightball: boolean }[];
  groupPlayers: string[];
  sessionPlayers: string[];
}

export default App;
