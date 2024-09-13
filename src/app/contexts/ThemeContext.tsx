import React, { createContext, ReactNode, useContext } from 'react';
 // Ajuste o caminho conforme necessário
import theme from '@/src/styles/themeGlobal';

const ThemeContext = createContext(theme);

export const ThemeProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)