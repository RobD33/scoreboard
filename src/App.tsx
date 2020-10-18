import React from 'react';
import './App.css';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Scoreboard from './components/Scoreboard/Scoreboard'
import Settings from './components/Settings/Settings';
import DisplaySettings from './Data/DisplaySettings';

function App() {

  const [appState, setAppState] = React.useState(generateNewAppState());

  return (
    <div className='App'>
      {appState.showComponent === 'Scoreboard' && 
        <Scoreboard 
          frames={ appState.frames }
          sessionPlayers={ appState.sessionPlayers }
          addFrame={ addFrame(appState, setAppState) }
          changeComponent={ changeComponent(appState, setAppState) }
          displaySettings={ appState.displaySettings }
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
      {
        appState.showComponent === 'Settings' &&
          <Settings
          changeComponent={changeComponent(appState, setAppState)}
          updateDisplaySettings={updateDisplaySettings(appState, setAppState)}
          displaySettings={appState.displaySettings}
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
    sessionPlayers: [],
    displaySettings: getDisplaySettings()
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

const getDisplaySettings = (): DisplaySettings => {
  return { 
    totalScores: true,
    individualScores: false,
    theme: 'mono',
    fontFamily: "'Trebuchet MS', sans-serif",
    colors: {
      mainColor: 'rgb(0, 255, 0)',
      playerOneColor: 'rgb(255, 255, 0)',
      playerTwoColor: 'rgb(0, 0, 255)',
      playerThreeColor: 'rgb(255, 0, 0)',
      playerFourColor: 'rgb(255, 192, 203)',
      playerFiveColor: 'rgb(255, 165, 0)',
      playerSixColor: 'rgb(0, 128, 0)',
    }
  }
}

const updateDisplaySettings = (appState : AppState , setAppState : Function): Function => {
  return (displaySettings: DisplaySettings): void => {
    setAppState({...appState, displaySettings})
    setCSSVariables(displaySettings)
  }
}

const setCSSVariables = (displaySettings: DisplaySettings): void => {
  let root = document.documentElement
  if(displaySettings.theme==='mono') {
    for(let variable in displaySettings.colors) {
      root.style.setProperty(`--${variable}`, displaySettings.colors.mainColor)
    }
  } else if (displaySettings.theme==='individual') {
    for(let variable in displaySettings.colors) {
      root.style.setProperty(`--${variable}`, displaySettings.colors[variable])
    }
  }
  root.style.setProperty(`--font-family`, displaySettings.fontFamily)
}

interface AppState {
  showComponent: string,
  frames: { winner: string, loser: string, eightball: boolean }[];
  groupPlayers: string[];
  sessionPlayers: string[];
  displaySettings: DisplaySettings;
}

export default App;
