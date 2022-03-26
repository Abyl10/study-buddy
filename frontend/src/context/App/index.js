import React, {createContext} from 'react';
import modules from '../../modules';

export const AppContext = createContext(modules)


const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={{
      services: modules.services,
      repositories: modules.repositories,
      stores: modules.stores,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
