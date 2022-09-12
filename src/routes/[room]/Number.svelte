<script lang="ts">
	import { game } from '../stores';
	let myturn = true;
	function myTurn(count: number) {
		myturn = false;
		addCount(count);
		ScrollBottom();
		setTimeout(() => {
			const number = [-1, 0, 1][Math.floor(Math.random() * 3)];
			cpTurn(number);
		}, 2000);
	}

	function cpTurn(count: number) {
		addCount(count);
		myturn = true;
	}
	function addCount(count: number) {
		const rdn = $game.length > 0 ? $game[$game.length - 1].result : Math.floor(Math.random() * 20);
		const result = Math.floor((count + rdn) / 3);
		const data = {
			user: 'user',
			count: count,
			formula: `[ ( ${count} + ${rdn} ) / 3 ] = ${result}`,
			result: result
		};
		$game = [...$game, data];
		ScrollBottom();
	}

	function ScrollBottom() {
		const element = document.getElementById('scroller');
		setTimeout(() => {
			element?.scroll({ top: 100000, behavior: 'smooth' });
		}, 0);
	}
</script>

<main>
	<button on:click={() => myTurn(-1)} disabled={!myturn}>-1</button>
	<button on:click={() => myTurn(0)} disabled={!myturn}>0</button>
	<button on:click={() => myTurn(1)} disabled={!myturn}>+1</button>
</main>

<style>
	main {
		display: flex;
		align-items: center;
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
	button:disabled {
		opacity: 0.5;
	}
	button:hover(:not(:disabled)) {
		background-color: rgb(241, 241, 241);
	}
</style>
