import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext<any>(undefined);

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

// Create a provider component
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState('');

  const contextValue = {
    data,
    setData,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
