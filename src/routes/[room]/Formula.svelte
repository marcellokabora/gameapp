<script lang="ts">
	import type { Game } from '../interfaces';

	export let item: Game;
</script>

<!-- <main>
	<span class="material-icons user1">person</span>
	<span class="material-icons user2">person</span>
	<div class="maino"> -->
<div class="count">{item.count}</div>
<div class="formula">{item.formula}</div>
<div class="result">{item.result}</div>

<!-- </div>
</main> -->
<style>
	.count {
		border-radius: 100px;
		font-weight: bold;
		background-color: #c4c4c4;
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
