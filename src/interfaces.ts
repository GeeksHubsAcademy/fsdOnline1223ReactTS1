
export interface DataFetched {
    success: boolean,
    message: string,
    data: any[]
}

export interface CharactersFetchedResults {
    info: ResultsInfo,
    results: any[]
}

export interface ResultsInfo {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}