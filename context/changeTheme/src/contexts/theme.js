import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// useTheme() will be called whenever any valur from ThemeContext is required and the wrapping will be done with ThemeProvider