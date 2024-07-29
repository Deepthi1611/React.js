import {createContext, useContext} from "react";

// default object inside the context - default values
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})

// writing context provider in the same file
export const ThemeProvider = ThemeContext.Provider

// custom hook which is used to provide the context so that we need not import both context and useContext in 
// files where we need to use the content in context. we can just import this custom hook.
export default function useTheme() {
    return useContext(ThemeContext)
}