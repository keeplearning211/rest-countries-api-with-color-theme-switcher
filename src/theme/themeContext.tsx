import React from 'react'

type ThemeContextType = {
  toggleMode?: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>({})

export default ThemeContext