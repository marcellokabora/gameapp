export interface User {
    id: string
    name: string
}
export interface Room {
    id: string
    name: string
    owner: string
    type: string
    game: Game[]
}
export interface Game {
    user: string
    count: number
    formula: any
    result: number
}
