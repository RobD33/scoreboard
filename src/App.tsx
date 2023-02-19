import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBoard from './components/CreateBoard/CreateBoard';
import Landing from './components/Landing/Landing';
import Modal from './components/Modal/Modal';
import Settings from './components/Settings/Settings';
import DisplaySettings from './Data/DisplaySettings';
import Frame from './Data/Frame';
import ModalProps from './Data/ModalProps';
import './App.css';
import SessionStats from './components/Stats/SessionStats';
import AppState from './Data/AppState';
import DataStore from './Data/DataStore';
import LocalStorage from './Data/LocalStorage';
import Login from './components/Login/Login';
import SessionType from "./Data/SessionType";
import GameSelect from './components/GameSelect/GameSelect';
import Display from './components/Display/Display';
import Match from './Data/Match';

function App() {

  const storage: DataStore = new LocalStorage()

  const getAppState = ():AppState => {
    const state = storage.loadState()

    if(state) setCSSVariables(state.displaySettings)
    if(state && !state.RRmatches) {
      state.RRmatches = [];
    }
    return state ? state : generateNewAppState()
  }

  const [appState, setAppState] = React.useState(getAppState);

  useEffect(() => {
    storage.saveState(appState);
  })

  const closeModal = useCallback(() => {
    setAppState(state => {
      return { ...state, modalProps: { ...state.modalProps, active: false }}
    })
  }, [])

  const addPlayerToSession = useCallback((player: string) => {
    setAppState(state => {
      return state.sessionPlayers.length < 6 ? {
        ...state,
        sessionPlayers: [ ...state.sessionPlayers, player ]
      } : {
        ...state
      }
    })
  }, [])

  const addPlayerToGroupAndSession = useCallback((player: string) => {
    setAppState(state => {
      if(!state.groupPlayers.includes(player)) {
        return state.sessionPlayers.length < 6 ? {
          ...state,
          sessionPlayers: [ ...state.sessionPlayers, player ],
          groupPlayers: [ ...state.groupPlayers, player ]
        }
        : {
          ...state,
          groupPlayers: [ ...state.groupPlayers, player ]
        }
      } else {
        return { ...state }
      }
    })
  }, [])

  const removePlayerFromSession = useCallback((playerOut: string) => {
    setAppState(state => {
      return {
        ...state,
        sessionPlayers: [...state.sessionPlayers.filter(player => player !== playerOut)]
      }
    })
  }, [])

  const addFrame = useCallback((frame: Frame) => {
    setAppState(state => {
      return {
        ...state,
        frames: [...state.frames, frame]
      }
    })
  },[])

  const updateDisplaySettings = useCallback((displaySettings: DisplaySettings) => {
    setAppState(state => {
      return {
        ...state,
        displaySettings: { ...displaySettings, colors: { ...displaySettings.colors } }
      }
    });
    setCSSVariables(displaySettings)
  }, [])

  const setModalProps = useCallback((modalProps: ModalProps) => {
    setAppState(state => {
      return {
        ...state,
        modalProps
      }
    })
  }, [])

  const removeLastFrame = useCallback(() => {
    setAppState(state => {
      return {
        ...state,
        frames: state.frames.slice(0, -1)
      }
    })
  }, [])

  const createNewSession = useCallback(() => {
    setAppState(state => {
      return {
        ...state,
        sessionPlayers: [],
        frames: [],
        RRmatches: [],
      }
    })
  },[])

  const clearAllPlayers = useCallback(() => {
    setAppState(state => {
      return {
        ...state,
        groupPlayers: [],
        sessionPlayers: [],
      }
    })
  }, [])

  const setSessionType = useCallback((sessionType: SessionType) => {
    setAppState(state => ({
      ...state,
      sessionType,
    }))
  }, [])

  const createRoundRobin = useCallback(() => {
    setAppState(state => {
      const RRmatches = state.sessionPlayers.reduce((acc: Match[], playerOne) => [
        ...acc, ...state.sessionPlayers.map(playerTwo => ({
            playerOne, playerTwo, winner: undefined, frames: [],
        }))], []).filter(match => match.playerOne !== match.playerTwo)

      return {
        ...state,
        RRmatches,
      }
    })
  }, [])

  const addFrameToMatch = useCallback((match: Match, frame: Frame) => {
    setAppState(state => {
      const RRmatches = [...state.RRmatches]
      const index = RRmatches.indexOf(match)
      RRmatches[index] = {
        ...match,
        frames: [...match.frames, frame]
      }
      return {
        ...state,
        RRmatches,
      }
    })
  }, [])

  const setDefaultDisplaySettings = useCallback(() => {
    updateDisplaySettings(defaultDisplaySettings)
  },[updateDisplaySettings])

  const sessionValid = appState.sessionPlayers.length > 1

  const listOfPotentialPLayers = appState.groupPlayers.filter(player => !appState.sessionPlayers.includes(player))

  return (
    <div className='App'>
      <Modal {...appState.modalProps} closeModal={closeModal}/>
      <Routes>
        <Route path='/' element={<Landing
          createNewSession={ createNewSession }
          sessionValid={ sessionValid }
        />}/>
        <Route path='/createboard' element={<CreateBoard
          addPlayerToSession={ addPlayerToSession }
          listOfPotentialPlayers={ listOfPotentialPLayers }
          sessionPlayers={ appState.sessionPlayers }
          addPlayerToGroupAndSession={ addPlayerToGroupAndSession }
          removePlayerFromSession={ removePlayerFromSession }
          setModalProps={ setModalProps }
          clearAllPlayers={ clearAllPlayers }
        />}/>
        <Route path='/play' element={<Display
          frames={ appState.frames }
          sessionPlayers={ appState.sessionPlayers }
          addFrame={ addFrame}
          removeLastFrame={ removeLastFrame }
          displaySettings={ appState.displaySettings }
          setModalProps={ setModalProps }
          sessionType={ appState.sessionType }
          RRmatches={ appState.RRmatches }
          addFrameToMatch={ addFrameToMatch }
        />}/>
        <Route path='/settings' element={<Settings
          updateDisplaySettings={ updateDisplaySettings }
          displaySettings={ appState.displaySettings }
          setDefaultDisplaySettings={ setDefaultDisplaySettings }
        />}/>
        <Route path='/sessionstats' element={<SessionStats
          frames={ appState.frames }
          sessionPlayers={ appState.sessionPlayers }
        />}/>
        <Route path='/login' element={<Login
        />}/>
        <Route path='/gameselect' element={<GameSelect
          setSessionType={setSessionType}
          RRmatches={ appState.RRmatches }
          createRoundRobin={ createRoundRobin }
        />}/>
      </Routes>
    </div>
  );
}

const generateNewAppState = (): AppState => {
  return {
    frames: [],
    groupPlayers: [],
    sessionPlayers: [],
    displaySettings: defaultDisplaySettings,
    RRmatches: [],
    modalProps: {
      message: '',
      positiveButtonText: '',
      negativeButtonText: '',
      positiveCallback: () => {},
      negativeCallback: () => {},
      active: false
    },
    sessionType: SessionType.freePlay,
  }
}

const defaultDisplaySettings: DisplaySettings = {
    totalScores: true,
    individualScores: false,
    eightballClears: false,
    theme: 'mono',
    fontFamily: 'Trebuchet MS',
    colors: {
      mainColor: 'rgb(20, 160, 20)',
      playerOneColor: 'rgb(175, 175, 0)',
      playerTwoColor: 'rgb(100, 100, 200)',
      playerThreeColor: 'rgb(175, 0, 0)',
      playerFourColor: 'rgb(175, 132, 139)',
      playerFiveColor: 'rgb(255, 165, 0)',
      playerSixColor: 'rgb(0, 128, 0)',
    }
}

const setCSSVariables = (displaySettings: DisplaySettings): void => {
  let root = document.documentElement
  if( displaySettings.theme === 'mono' ) {
    for(let variable in displaySettings.colors) {
      root.style.setProperty(`--${variable}`, displaySettings.colors.mainColor)
    }
  } else if ( displaySettings.theme === 'individual' ) {
    for(let variable in displaySettings.colors) {
      root.style.setProperty(`--${variable}`, displaySettings.colors[variable])
    }
  }
  root.style.setProperty(`--font-family`, displaySettings.fontFamily)
}

export default App;
