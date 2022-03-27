import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation';
import AppContextProvider from './src/context/App';

const App = () => {
  return (
    <AppContextProvider>
        <Navigation />
    </AppContextProvider>
  );
};


export default App;
