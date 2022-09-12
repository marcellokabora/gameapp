import { writable } from 'svelte/store';
import type { Game } from './interfaces';

export const game = writable<Game[]>([]);

export const rooms = writable([
    {
        id: "d2726a4a",
        name: "Room Berlin CPU",
        owner: "I0yZ-jSTAGV8xTNkAAAD",
        type: "cpu"
    },
    {
        id: "aa0c86fa",
        name: "Room Izmir CPU",
        owner: "lqcflVIEANZWYkmAAAAC",
        type: "cpu"
    },
    {
        id: "6f3k6j34",
        name: "Room Amsterdam",
        owner: "lqcflVIEANZWYkmAAADD",
        type: "human"
    }
]);