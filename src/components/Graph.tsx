import React, { ReactElement, useState, useEffect, useContext } from 'react'
import { Grid, makeStyles, Card } from '@material-ui/core'
import { Line } from "react-chartjs-2"
import numeral from "numeral"

import countries, { TimelineData } from "../services/service"
import { SelectedCountryContext, CSelectedCountryContext } from "./Covid"

const useStyles = makeStyles((theme) => ({
    controller: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    card: {
        padding: theme.spacing(1)
    }
}))

const option = {
    legend: {
        display: true
    },
    element: {
        point: {
            radius: 0
        }
    },
    maintainAspectRatio: true,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem: any, data: any) {
                return numeral(tooltipItem.value).format("+0.0")
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    parser: "MM/DD/YY",
                    tooltipFormat: "ll"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false
                },
                ticks: {
                    callback: function (value: number, index: number, values: any) {
                        return numeral(value as number).format("0a")
                    }
                }
            }
        ]
    }
}

export default function Graph(): ReactElement {
    const classes = useStyles()

    const SelectedCountry = useContext<CSelectedCountryContext | undefined>(SelectedCountryContext)
    const [title, setTitle] = useState<String>("...")
    const [graphData, setGraphData] = useState<{} | undefined>(undefined)

    useEffect(() => {
        function getdata() {
            countries.getHistoryCases(SelectedCountry?.selectedCountry as String)
                .then((data: TimelineData) => {
                    setTitle(data.country)
                    setGraphData({
                        labels: Object.keys(data.timeline.cases),
                        datasets: [
                            {
                                label: "Cases",
                                data: Object.values(data.timeline.cases),
                                borderColor: "rgba(0, 0, 0, 1)",
                                backgroundColor: "rgba(0, 0, 120, 0.2",
                                legend: true
                            },
                            {
                                label: "Deaths",
                                data: Object.values(data.timeline.deaths),
                                borderColor: "rgba(255, 99, 132, 0.6)",
                                backgroundColor: "rgba(120, 0, 0, 0.2",
                                legend: true
                            },
                            {
                                label: "Recovered",
                                data: Object.values(data.timeline.recovered),
                                borderColor: "rgba(90, 255, 132, 0.6)",
                                backgroundColor: "rgba(0, 120, 0, 0.2",
                                legend: true
                            }
                        ]
                    })
                })
        }
        getdata()
    }, [SelectedCountry])

    return (
        <Grid className={classes.controller}>
            <Card className={classes.card} elevation={8}>
                LOCATION : {title}
                {graphData && (
                    <Line
                        type="bar"
                        data={graphData}
                        options={option}
                    />
                )}
            </Card>
        </Grid>
    )
}
