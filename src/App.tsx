import React, {useEffect} from 'react';
import './App.css';
import Main from './components/main';
import { PlayerProvider } from './context/player-info';

const App: React.FC = () => {

  useEffect(() => {
    console.log('we are in');
  });
  
  return (
    <div className="App">
      <PlayerProvider>
        <Main />
      </PlayerProvider>
    </div>
  );
}

export default App;
