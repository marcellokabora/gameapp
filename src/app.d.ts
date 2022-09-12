// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface PageData {}

	// interface PageError {}

	// interface Platform {}

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

}
