import React, {
    ReactElement,
    useEffect,
    useState,
    SetStateAction,
} from "react";
import Header from "./Header";
import { Grid } from "@material-ui/core";

import countries from "../services/service";
import InfoBar from "./InfoBar";
import Map from "./Map";
import Table from "./Table";
import Graph from "./Graph";
import Copyright from "./Copyright";
import Loading from "./Loading";

export interface CSelectedCountryContext {
    selectedCountry: String;
    setSelectedCountry: React.Dispatch<SetStateAction<String>>;
}
export const SelectedCountryContext = React.createContext<
    CSelectedCountryContext | undefined
>(undefined);
export const ViewTypeContext = React.createContext<string>("cases");

export interface InfoBarData {
    todayCases: Number;
    cases: Number;
    todayRecovered: Number;
    recovered: Number;
    todayDeaths: Number;
    deaths: Number;
}

export interface Coordinate {
    lat: number;
    lng: number;
}

const centerCoordinate: Coordinate = {
    lat: 20,
    lng: 0,
};

export default function Covid(): ReactElement {
    const [loadData, setLoadData] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<String>("WORLDWIDE");
    const [selectedCountryData, setSelectedCountryData] = useState<
        InfoBarData | undefined
    >(undefined);
    const [coordinate, setCoordinate] = useState<Coordinate>(centerCoordinate);
    const [viewType, setViewType] = useState<string>("cases");

    useEffect(() => {
        async function getdata(): Promise<void> {
            setLoadData(await countries.getAllData());
        }
        getdata();
    }, []);

    useEffect(() => {
        async function getdata() {
            const data = await countries.getCountryData(selectedCountry);
            setSelectedCountryData(data);

            if (selectedCountry === "WORLDWIDE")
                setCoordinate(centerCoordinate);
            else
                countries
                    .getCountryLocation(selectedCountry as String)
                    .then(({ lat, long }) => {
                        setCoordinate({ lat: lat, lng: long });
                    });
        }
        getdata();
    }, [selectedCountry]);

    return loadData ? (
        <SelectedCountryContext.Provider
            value={{ selectedCountry, setSelectedCountry }}
        >
            <ViewTypeContext.Provider value={viewType}>
                <Grid container direction="row" justify="space-between">
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={8}
                        container
                        direction="column"
                        justify="space-between"
                    >
                        <Grid item>
                            <Header />
                        </Grid>

                        <Grid item style={{flex:1}}>
                            <Map coordinate={coordinate} />
                        </Grid>

                        {/* <Grid item container>
                                <Grid item xs={12}>
                                    <Graph />
                                </Grid>
                            </Grid> */}

                        <Grid item container justify="space-around" spacing={1}>
                            <InfoBar
                                selectedCountryData={selectedCountryData}
                                setViewType={setViewType}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        container
                        direction="column"
                        justify="space-between"
                    >
                        <Grid item style={{flex: 1}}>
                            {" "}
                            {/*/xs={12}*/}
                            <Table />
                        </Grid>

                        {/* <Grid item xs={12}>
                                <Map />
                            </Grid> */}

                        <Grid item container>
                            <Grid item xs={12}>
                                <Graph />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ margin: "25px auto auto auto" }}>
                    <Copyright />
                </Grid>
            </ViewTypeContext.Provider>
        </SelectedCountryContext.Provider>
    ) : (
        <Loading />
    );
}
