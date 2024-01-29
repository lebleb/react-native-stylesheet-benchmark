
import { UnistylesRegistry } from 'react-native-unistyles'
export const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    superLarge: 2000,
    tvLike: 4000
} as const

export const lightTheme = {
    colors: {
        red: '#ff0000',
    },
} as const

export const darkTheme = {
    colors: {
        red: '#ff0000',
    },
} as const

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints

// if you defined themes
type AppThemes = {
    light: typeof lightTheme,
    dark: typeof darkTheme
}

// override library types
declare module 'react-native-unistyles' {
    export interface UnistylesBreakpoints extends AppBreakpoints {}
    export interface UnistylesThemes extends AppThemes {}
}



UnistylesRegistry
    .addBreakpoints(breakpoints)
    .addThemes({
        light: lightTheme,
        dark: darkTheme,
        // register other themes with unique names
    })
    .addConfig({
        // you can pass here optional config described below
        adaptiveThemes: true
    })
