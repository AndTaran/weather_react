export type TypeCity = {
    country: string,
    lat: number,
    lon: number,
    local_names: {},
    name: string,
    state: string
}[]

export const enum EmptyCity {
    search = 'search',
    found = 'found',
    notFound = 'notFound'
}

export type StateCity = {
    cityName: string,
    lat: number | null,
    lon: number | null,
    emptyCity: EmptyCity
}

