import axios from "axios"

const URL = "https://disease.sh/v3/covid-19"

let countries: Array<FullResponseData> | undefined = undefined

const service = {
    getAllData: async (): Promise<boolean> => {
        const { data } = await axios.get(`${URL}/countries`)
        countries = data
        return true
    },
    getCountriesList: (): Array<String> => {
        return countries?.map((country) => (country as any).country as String) as String[]
    },
    getCountryData: async (country: String): Promise<any> => {
        const { data } = await axios.get(`${URL}/${country === "WORLDWIDE" ? "all" : `countries/${country}`}`)
        return data
    },
    getCountryListAndCases: (): Array<{ name: String, cases: Number, recovered: Number, deaths: Number }> => {
        return countries?.map(country => ({ name: country.country, cases: country.cases, recovered: country.recovered, deaths: country.deaths }))
            .sort((a, b) => (b.cases as number) - (a.cases as number)) as Array<any>
    },
    getHistoryCases: async (country: String): Promise<TimelineData> => {
        const param = (country === "WORLDWIDE" || !country) ? "all" : country
        const url = `${URL}/historical/${param}?lastdays=120`
        const { data } = await axios.get(url)
        const processedData = country !== "WORLDWIDE" ? data : ({
            country: "Worldwide",
            timeline: data
        })
        return processedData
    },
    getCountryLocation: async (country: String): Promise<any> => {
        const { data } = await axios.get(`${URL}/${country === "WORLDWIDE" ? "all" : `countries/${country}`}`)
        return data.countryInfo
    },
    getCountriesLocationData: (): Array<MapData> => {
        return (countries as Array<FullResponseData>).map((country: FullResponseData) => ({
            name: country.country,
            iso2: country.countryInfo.iso2,
            flag: country.countryInfo.flag,
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long,
            cases: country.cases,
            deaths: country.deaths,
            recovered: country.recovered,
            population: country.population

        }))
    }
}

export default service;

export interface TimelineData {
    country: String
    timeline: {
        cases: {}
        deaths: {}
        recovered: {}
    }
}

interface FullResponseData {
    country: String
    countryInfo: {
        lat: Number
        long: Number
        flag: String
        iso2: String
    }
    cases: Number
    todayCases: Number
    deaths: Number
    todayDeaths: Number
    recovered: Number
    todayRecovered: Number
    population: Number
}

export interface MapData {
    name: String
    iso2: String
    flag: String
    lat: Number
    lng: Number
    cases: Number
    deaths: Number
    recovered: Number
    population: Number
}