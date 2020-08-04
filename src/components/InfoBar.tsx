import React, { ReactElement, SetStateAction } from 'react'
import { Grid } from '@material-ui/core'

import InfoBox from "./InfoBox"
import { InfoBarData } from "./Covid"
import { fillType } from "./Map"

interface Props {
    selectedCountryData: InfoBarData | undefined
    setViewType: React.Dispatch<SetStateAction<string>>
}

export default function InfoBar({ selectedCountryData, setViewType }: Props): ReactElement {
    return (
        <>
            <Grid item xs={4} onClick={() => setViewType("cases")}>
                <InfoBox color={fillType.cases.color} title="Cases" cases={selectedCountryData?.todayCases} total={selectedCountryData?.cases} />
            </Grid>
            <Grid item xs={4} onClick={() => setViewType("recovered")}>
                <InfoBox color={fillType.recovered.color} title="Recovered" cases={selectedCountryData?.todayRecovered} total={selectedCountryData?.recovered} />
            </Grid>
            <Grid item xs={4} onClick={() => setViewType("deaths")}>
                <InfoBox color={fillType.deaths.color} title="Deaths" cases={selectedCountryData?.todayDeaths} total={selectedCountryData?.deaths} />
            </Grid>
        </>
    )
}
