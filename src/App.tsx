import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const [appState, setAppState] = React.useState(generateNewAppState());

  return (
    <div>
      {appState.sessionInProgress ? 
        <Scoreboard sessionState={ appState.sessionState }/> :
        <CreateBoard addPlayerToState={ addPlayerToState(appState,setAppState) }/>
      }
    </div>
  );
}

const generateNewAppState = (): AppState => {
  return {
    sessionInProgress: false,
    sessionState: {}
  }
}

const addPlayerToState = (appState : AppState , setAppState : Function) => {
  return (newPlayer :string) => {
    const newAppState = {
      sessionInProgress: appState.sessionInProgress,
      sessionState: { ...appState.sessionState }
    }
    for(let player in newAppState.sessionState) {
      newAppState.sessionState[player][newPlayer] = 0
      newAppState.sessionState[newPlayer][player] = 0
    }
    setAppState(newAppState)
  }
}

interface AppState {
  sessionInProgress: boolean;
  sessionState: { [player: string]: { [player: string]: number}}
}

export default App;
