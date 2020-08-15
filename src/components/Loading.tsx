import React, { ReactElement } from "react";
import { CircularProgress, makeStyles, Theme } from "@material-ui/core/";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function Loading(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress />
        </div>
    );
}
