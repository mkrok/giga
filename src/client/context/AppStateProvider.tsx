import { createContext, ReactNode, useContext, useState } from 'react';
import { AppDataType, AppStateContextInterface } from './@types.context';
import { SIZE } from '~/config/constants';

const initialState = {
  checkboxes: Array.from(Array(SIZE).fill(false)),
  data: Array.from(Array(SIZE).fill([])),
  error: false,
  errorMessage: '',
};

const appState = {
  appData: initialState,
  setAppData: (appData: AppDataType) => {},
} as AppStateContextInterface;

const AppStateContext = createContext(appState);
const useAppData = () => useContext(AppStateContext);

type AppStateProviderProps = {
  children: ReactNode;
};

const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [appData, setAppData] = useState<AppDataType>(initialState);
  return (
    <AppStateContext.Provider value={{ appData, setAppData }}>{children}</AppStateContext.Provider>
  );
};

export { AppStateProvider, useAppData };
