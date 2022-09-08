import React from 'react';
import { useThemeState } from '../store/theme';

export const useColorTheme = () => {
  const { theme, setTheme } = useThemeState();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    colorTheme: theme,
    setColorTheme: setTheme,
  };
};
