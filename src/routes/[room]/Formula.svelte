<script lang="ts">
	import type { Game } from '../interfaces';

	export let item: Game;
</script>

<main>
	<img class="user user1" src="/logo_orange.png" alt="" />
	<img class="user user2" src="/player.png" alt="" />
	<div class="maino">
		<div class="count">{item.count}</div>
		<div class="formula">{item.formula}</div>
		<div class="result">{item.result}</div>
	</div>
</main>

<style>
	main {
		display: flex;
	}
	.maino {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		text-align: left;
		align-items: flex-start;
	}
	.user {
		height: 40px;
		width: 40px;
		margin: 0 10px;
		padding: 10px;
	}
	.count {
		border-radius: 100px;
		font-weight: bold;
		background-color: #205a6d;
		color: white;
		margin-bottom: 20px;
		height: 56px;
		width: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}
	.result,
	.formula {
		background-color: #f8f5f2;
		border-radius: 2px;
		padding: 10px 20px;
		margin-bottom: 10px;
	}
	.user2 {
		display: none;
	}
</style>
