import React, { ReactElement, useState, SetStateAction } from 'react'
import "./App.css"
import Covid from './components/Covid'

import "leaflet/dist/leaflet.css"
import { createMuiTheme, ThemeProvider, Paper, makeStyles } from '@material-ui/core'

export const DarkThemeContext = React.createContext<boolean>(false)
export const SetDarkThemeContext = React.createContext<React.Dispatch<SetStateAction<boolean>> | undefined>(undefined)

const useStyles = makeStyles(() => ({
    app: {
        height: "100vh"
    }
}))

export default function App(): ReactElement {
    const classes = useStyles()
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const theme = createMuiTheme({
        palette: {
            type: darkTheme ? "dark" : "light"
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <DarkThemeContext.Provider value={darkTheme}>
                <SetDarkThemeContext.Provider value={setDarkTheme}>
                    <Paper className="App" elevation={0} style={{ minHeight: "100vh" }}>
                        <Covid />
                    </Paper>
                </SetDarkThemeContext.Provider>
            </DarkThemeContext.Provider>
        </ThemeProvider>
    )
}