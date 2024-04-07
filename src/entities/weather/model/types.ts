export type OptionsDate = {
    weekday?: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

export type WeatherInfo = {
    icon: string,
    temp: number,
    cityName: string,
    country: string,
    weatherDescription: string,
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    windSpeed: number,
    humidity: number
}

export type WeatherTypes = {
    coord?: {
        lat: number,
        lon: number
    },
    weather: [
        {
            id: number | null
            main: string | null
            description: string | null
            icon: string | null
        }
    ],
    base?: string,
    main: {
        temp: number | null,
        feels_like: number | null,
        temp_min: number | null,
        temp_max: number | null,
        pressure: number | null,
        humidity: number | null,
        sea_level?: number,
        grnd_level?: number
    },
    visibility?: number,
    wind: {
        speed: number | null,
        deg?: number,
        gust?: number
    },
    clouds?: {
        all: number
    },
    dt?: number,
    sys: {
        type?: number,
        id?: number,
        country: string | null,
        sunrise?: number,
        sunset?: number
    },
    timezone?: number,
    id?: number,
    name: string | null,
    cod: number | null,
}