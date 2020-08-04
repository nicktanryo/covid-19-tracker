import React, { ReactElement, useEffect, useState, useContext } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, makeStyles, TableBody, Typography, withStyles, createStyles, Theme, Grid } from '@material-ui/core'

import countries from "../services/service"
import { CSelectedCountryContext, SelectedCountryContext } from "./Covid"

const useStyles = makeStyles((theme) => ({
    controller: {
        padding: theme.spacing(2)
    },
    overflow: {
        display: "grid",
        overflow: "hidden",
        height: "100%"
    },
    container: {
        maxHeight: "50vh"
    },
    table: {
        minWidth: 100
    },
    text: {
        fontSize: "0.9rem"
    }
}))

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            cursor: "pointer",
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
            "&:hover": {
                backgroundColor: "#c0c0c0"
            }
        },
    }),
)(TableRow);

export default function TableData(): ReactElement {
    const classes = useStyles()

    const SelectedCountry = useContext<CSelectedCountryContext | undefined>(SelectedCountryContext)

    const [tableData, setTableData] = useState<Array<any>>([])

    useEffect(() => {
        async function getdata() {
            const data = countries.getCountryListAndCases()
            setTableData(data)
        }
        getdata()
    }, [])
    return (
        <Grid className={classes.controller}>
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" onClick={() => SelectedCountry?.setSelectedCountry("WORLDWIDE")} style={{ cursor: "pointer" }}>
                                Country
                            </TableCell>
                            <TableCell align="right">
                                Cases
                            </TableCell>
                            <TableCell align="right">
                                Deaths
                            </TableCell>
                            <TableCell align="right">
                                Recovered
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((data, index) => {
                                return (
                                    <StyledTableRow key={index} onClick={() => SelectedCountry?.setSelectedCountry(data.name)} className="table-li">
                                        <TableCell align="left">
                                            <Typography className={classes.text}>
                                                {data.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography className={classes.text}>
                                                {data.cases.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography className="table-li-red">
                                                {data.deaths.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography className="table-li-green">
                                                {data.recovered.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
