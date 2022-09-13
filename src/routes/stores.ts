import { writable } from 'svelte/store';
import type { Game, Room } from './interfaces';

export const game = writable<Game[]>([]);

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
    game.set(JSON.parse(localStorage.game))
    game.subscribe((value) => localStorage.game = JSON.stringify(value))
}


// export const game = writable<Game[]>(JSON.parse(JSON.stringify(localStorage.getItem("game"))) || []);
// game.subscribe(val => localStorage.setItem("game", (JSON.parse(JSON.stringify(val)))))

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

export const room = writable<Room | undefined>()
