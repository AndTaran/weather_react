type PosTypes = {
    coords: {
        accuracy: number,
        latitude: number,
        longitude: number
    },
    timestamp: number
}

type ErrorTypes = {
    code: number,
    message: string
}

export type GeoTypes = {
    options: {
        enableHighAccuracy: boolean,
        timeout: number,
        maximumAge: number
    },
    error: (err: ErrorTypes) => void,
    success: (pos: PosTypes) => void
}