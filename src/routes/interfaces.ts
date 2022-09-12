export interface Room {
    id: string;
    name: string;
    users: string[];
}
export interface User {
    id: string;
    name: string;
}
export interface Game {
    user: string;
    count: number;
    formula: any;
    result: number;
}
