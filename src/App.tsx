import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard'

function App() {

  const [AppState, setAppState] = React.useState(generateNewAppState());

  return (
    <div>
      <Scoreboard sessionState={ AppState.sessionState }/>
    </div>
  );
}

const generateNewAppState = () => {
  return {
    sessionInProgress: false,
    sessionState: {}
  }
}

const AddPlayerToState = () => {

}

export default App;
