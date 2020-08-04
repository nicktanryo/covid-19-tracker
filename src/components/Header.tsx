import React, { ReactElement, useContext, useEffect, useState, SetStateAction } from 'react'

import GpsFixedRoundedIcon from '@material-ui/icons/GpsFixedRounded';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { AppBar, Toolbar, Grid, Typography, FormControl, Select, MenuItem, makeStyles, Button } from '@material-ui/core';

import { DarkThemeContext, SetDarkThemeContext } from "../App"
import { SelectedCountryContext, CSelectedCountryContext } from "./Covid"
import countries from "../services/service"

export default function Header(): ReactElement {
    const DarkTheme = useContext<boolean>(DarkThemeContext)
    const useStyles = makeStyles((theme) => ({
        appbar: {
            backgroundColor: DarkTheme ? "#424242" : "white" // "#252a34"
        },
        logo: {
            height: "100%",
            color: "hotpink",
            marginRight: theme.spacing(1),
        },
        svg: {
            marginLeft: theme.spacing(1)
        },
        button: {
            marginLeft: theme.spacing(1)
        },
        title: {
            height: "100%"
        },
        select: {
            maxHeight: "100px",
        }
    }))
    const classes = useStyles()

    const SetDarkTheme = useContext<React.Dispatch<SetStateAction<boolean>> | undefined>(SetDarkThemeContext)

    const [countriesList, setCountriesList] = useState<Array<String>>([])
    const SelectedCountries = useContext<CSelectedCountryContext | undefined>(SelectedCountryContext)

    useEffect(() => {
        const countrieslist = countries.getCountriesList()
        setCountriesList(countrieslist)
    }, [])

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid container direction="row" justify="space-between">

                    <Grid item>
                        <Grid container alignItems="center" className={classes.title}>
                            <Grid item><GpsFixedRoundedIcon className={classes.logo} /></Grid>

                            <Grid item>
                                <Typography variant="h6" display="inline" color={DarkTheme ? "textSecondary" : "textPrimary"}>
                                    COVID 19 Tracker
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <FormControl size="small">
                            <Select
                                variant="outlined"
                                value={SelectedCountries?.selectedCountry}
                                color={DarkTheme ? "secondary" : "primary"}
                                className={classes.select}
                                onChange={(event) => SelectedCountries?.setSelectedCountry(event.target.value as String)}
                            >
                                <MenuItem key={"worldwide"} value={"WORLDWIDE"} style={{ backgroundColor: "rgba(166, 220, 239, 0.3)" }}><b>Worldwide</b></MenuItem>

                                {
                                    countriesList && countriesList.map((country, index) => {
                                        return <MenuItem key={index} value={country as string} >{country}</MenuItem>
                                    })
                                }

                            </Select>
                        </FormControl>

                        <Button variant="contained" color={DarkTheme ? "secondary" : "default"} className={classes.button} onClick={() => SetDarkTheme && SetDarkTheme(prev => !prev)} >
                            {DarkTheme ? "LIGHT" : "DARK"} <Brightness4Icon className={classes.svg} />
                        </Button>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
