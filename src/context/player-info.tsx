import React, { useState } from 'react';

const PlayerContext = React.createContext({});


export const PlayerProvider = ({ children }) => {
    const [ isRunning, setIsRunning ] = useState(false);

    const toggleRunning = () => {
        setIsRunning(!isRunning);
    }

    return <PlayerContext.Provider value={{
        isRunning,
        toggleRunning
    }}>
        {children}
        </PlayerContext.Provider>
};


export default PlayerContext;
