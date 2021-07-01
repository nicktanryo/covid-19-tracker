import React, { ReactElement, useState, useEffect, useContext } from 'react'

import { Paper, makeStyles, Card, CardMedia, CardContent } from '@material-ui/core'

import { MapContainer as LeafletMap, TileLayer, Popup, Circle } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

import countries, { MapData } from "../services/service"
import { SelectedCountryContext, CSelectedCountryContext, ViewTypeContext, Coordinate } from "./Covid"

interface Props {
    coordinate: Coordinate
}

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        border: "1px solid black"
    },
    right: {
        textAlign: "right"
    },
    left: {
        textAlign: "left"
    }
}))

function TableRow({ field, value }: { field: string, value: string }): ReactElement {
    const classes = useStyles()
    return (
        <tr>
            <td className={classes.left}>{field}</td>
            <td>:</td>
            <td className={classes.right}>{field === "Country" ? <b>{value}</b> : value}</td>
        </tr>
    )
}

export default function Map({ coordinate }: Props): ReactElement {
    const classes = useStyles()

    const ViewType = useContext<string>(ViewTypeContext)

    const SelectedCountry = useContext<CSelectedCountryContext | undefined>(SelectedCountryContext)

    const [mapData, setMapData] = useState<Array<MapData> | undefined>(undefined)

    useEffect(() => {
        const data: Array<MapData> = countries.getCountriesLocationData()
        setMapData(data)
    }, [])

    return (
        <Paper className={"map"} elevation={8} style={{height: "700px"}}>
            <LeafletMap center={coordinate} zoom={SelectedCountry?.selectedCountry === "WORLDWIDE" ? 2 : 5} className="leaflet-container" minZoom={1}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapData && (
                    mapData.map((countryData: MapData) => {
                        const { lat, lng, flag, cases, deaths, recovered, population, iso2, name } = countryData
                        const { color, fillColor, multiplier } = fillType[ViewType as keyof FillType]
                        return (
                            <Circle key={`${name}-${iso2}`}
                                center={{ lat: lat as number, lng: lng as number }}
                                color={color} fillColor={fillColor} fillOpacity={0.4}
                                radius={Math.sqrt(countryData[ViewType as keyof MapData] as number) * multiplier}
                            >
                                <Popup closeButton={false} maxHeight={250} maxWidth={180}>
                                    <Card>
                                        <CardMedia
                                            className={classes.media}
                                            image={flag as string}
                                            title={name as string}
                                        />
                                        <CardContent>

                                            <table>
                                                <tbody>
                                                    <TableRow field="Country" value={name as string} />
                                                    <TableRow field="Population" value={population.toLocaleString()} />
                                                    <TableRow field="Cases" value={cases.toLocaleString()} />
                                                    <TableRow field="Deaths" value={deaths.toLocaleString()} />
                                                    <TableRow field="Recovered" value={recovered.toLocaleString()} />
                                                </tbody>
                                            </table>
                                        </CardContent>
                                    </Card>
                                </Popup>
                            </Circle>
                        )
                    })
                )}
            </LeafletMap>
        </Paper >
    )
}

interface FillType {
    cases: {}
    deaths: {}
    recovered: {}
}

export const fillType = {
    cases: {
        color: "red",
        fillColor: "hotpink",
        multiplier: 800
    },
    deaths: {
        color: "darkred",
        fillColor: "red",
        multiplier: 4000
    },
    recovered: {
        color: "green",
        fillColor: "lightgreen",
        multiplier: 1400
    }
}