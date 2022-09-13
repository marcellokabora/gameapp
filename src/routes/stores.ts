import { writable } from 'svelte/store';
import type { Room } from './interfaces';

export const rooms = writable<Room[]>([
    {
        id: "d2726a4a",
        name: "Room Berlin CPU",
        owner: "I0yZ-jSTAGV8xTNkAAAD",
        type: "cpu",
        game: []
    },
    {
        id: "aa0c86fa",
        name: "Room Izmir CPU",
        owner: "lqcflVIEANZWYkmAAAAC",
        type: "cpu",
        game: []
    },
    {
        id: "6f3k6j34",
        name: "Room Amsterdam",
        owner: "lqcflVIEANZWYkmAAADD",
        type: "human",
        game: []
    }
]);



