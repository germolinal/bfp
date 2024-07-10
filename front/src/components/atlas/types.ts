export type ValidDomain = "daylight" | "acoustic" | "warmness" | "coolness" | "air quality"

export type CodeData = {
    name: string
    domains: string[]
}
export type LayerData = {
    name: string
    data: CodeData[]
}

export type Schema = {
    layers: LayerData[]
}

export type Quote = {
    text: string
    codes: string[]
    domain: ValidDomain
    study?: string
    date?: string
    respondentID: number
    age: number
    gender: string
    household: string
    city: string
    country: string
}