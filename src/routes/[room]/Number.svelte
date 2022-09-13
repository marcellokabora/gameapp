<script lang="ts">
	import { rooms, myturn, loadturn } from '../stores';
	import { page } from '$app/stores';
	$: game = $rooms.filter((room) => room.id === $page.params.room)[0]?.game;
	function myTurn(count: number) {
		$myturn = false;
		$loadturn = true;
		addCount(count);
		ScrollBottom();
		setTimeout(() => {
			const number = [-1, 0, 1][Math.floor(Math.random() * 3)];
			cpTurn(number);
		}, 2000);
	}
	function cpTurn(count: number) {
		addCount(count);
		$loadturn = false;
		$myturn = true;
	}
	function addCount(count: number) {
		if (game) {
			const rdn = game.length > 0 ? game[game.length - 1].result : Math.floor(Math.random() * 20);
			const result = Math.floor((count + rdn) / 3);
			game.push({
				user: 'user',
				count: count,
				formula: `[ ( ${count} + ${rdn} ) / 3 ] = ${result}`,
				result: result
			});
			$rooms = [...$rooms];
			ScrollBottom();
		}
	}
	function ScrollBottom() {
		const element = document.getElementById('scroller');
		setTimeout(() => {
			element?.scroll({ top: 100000, behavior: 'smooth' });
		}, 0);
	}
</script>

<main class:hiddem={!myturn}>
	<button on:click={() => myTurn(-1)}>-1</button>
	<button on:click={() => myTurn(0)}>0</button>
	<button on:click={() => myTurn(1)}>+1</button>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		margin-top: -5px;
	}
	button {
		margin: 0px 10px;
		color: #1574f5;
		background-color: white;
		border-radius: 100px;
		height: 56px;
		width: 56px;
		border: none;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
		font-weight: bold;
		font-size: 18px;
		cursor: pointer;
	}
	.hiddem {
		display: none;
	}
	button:hover {
		background-color: var(--btn-hover);
	}
</style>
