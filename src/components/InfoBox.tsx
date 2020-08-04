import React, { ReactElement } from 'react'
import { Card, CardContent, Typography, makeStyles, Theme } from '@material-ui/core'

interface Props {
    title: String
    total: Number | undefined
    cases: Number | undefined
    color: String
}



export default function InfoBox({ title, total, cases, color }: Props): ReactElement {
    const useStyles = makeStyles((theme: Theme) => ({
        card: {
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
                borderLeft: `5px solid ${color}`
            }
        }
    }))
    const classes = useStyles()
    return (
        <Card className={classes.card} elevation={8}>
            <CardContent>
                <Typography color="textSecondary" align="center">
                    {title}
                </Typography>
                <Typography variant="h5" align="center">
                    {cases ? formatNumber(cases) : 0}
                </Typography>
                <Typography color="textSecondary" align="center">
                    {total ? total.toLocaleString() : 0} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

function formatNumber(cases: Number): String {
    let sign = ""
    if (cases > 0) sign = "+"
    else if (cases < 0) sign = "-"
    return sign + " " + cases.toLocaleString()
}