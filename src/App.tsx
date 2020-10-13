import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const [appState, setAppState] = React.useState(generateNewAppState());

  return (
    <div>
      {appState.showComponent === 'Scoreboard' && 
        <Scoreboard 
          frames={ appState.frames }
          sessionPlayers={ appState.sessionPlayers }
          addFrame={ addFrame(appState, setAppState) }
        />
      }
      {appState.showComponent === 'CreateBoard' &&
        <CreateBoard
          addPlayerToSession={ addPlayerToSession(appState,setAppState) }
          listOfPotentialPlayers={ getListOfPotentialPLayers(appState) }
          sessionPlayers={ appState.sessionPlayers }
          addPlayerToGroupAndSession={ addPlayerToGroupAndSession(appState, setAppState) }
          removePlayerFromSession={ removePlayerFromSession(appState, setAppState) }
          changeComponent={changeComponent(appState, setAppState)}
        />
      }
    </div>
  );
}

const generateNewAppState = (): AppState => {
  return {
    showComponent: 'CreateBoard',
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

const addPlayerToGroupAndSession = (appState : AppState , setAppState : Function) => {
  return (player: string) => {
    const sessionPlayers = [ ...appState.sessionPlayers, player ]
    const groupPlayers = [ ...appState.groupPlayers, player ]
    appState = { ...appState, sessionPlayers, groupPlayers }
    setAppState(appState)
  }
}

const removePlayerFromSession = (appState: AppState, setAppState: Function): Function => {
  return (playerOut: string) => {
    const sessionPlayers = [ ...appState.sessionPlayers.filter(player => player !== playerOut) ]
    appState = { ...appState, sessionPlayers }
    setAppState(appState)
  }
}

const getListOfPotentialPLayers = (appState: AppState) => {
  return appState.groupPlayers.filter(player => !appState.sessionPlayers.includes(player))
}

const changeComponent = (appState: AppState, setAppState: Function): Function => {
  return (component: string) => {
    const newAppState: AppState = { ...appState };
    newAppState.showComponent = component
    setAppState(newAppState)
  }
}

const addFrame = (appState: AppState, setAppState: Function): Function => {
  return (frame: { winner: string, loser: string, eightball: boolean }) => {
    const newAppState = { ...appState };
    newAppState.frames = [ ...newAppState.frames, frame]
    setAppState(newAppState)
  }
}

const getGroupPlayers = () => {
  return ['Rob', 'Jamie', 'Bails','JP']
}

interface AppState {
  showComponent: string,
  frames: { winner: string, loser: string, eightball: boolean }[];
  groupPlayers: string[];
  sessionPlayers: string[];
}

export default App;
