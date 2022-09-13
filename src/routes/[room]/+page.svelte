<script lang="ts">
	import { rooms } from '../stores';
	import Number from './Number.svelte';
	import Formula from './Formula.svelte';
	import { page } from '$app/stores';
	$: game = $rooms.filter((room) => room.id === $page.params.room)[0]?.game;
</script>

<div class="items" id="scroller">
	<div class="citems">
		{#if game}
			{#each game as item, index}
				<div class="flexo" class:odd={index % 2}>
					<Formula {item} />
				</div>
			{/each}
		{/if}
	</div>
</div>
<div class="action">
	<Number />
</div>

<style>
	.items {
		flex: 1;
		overflow: auto;
		width: 100%;
	}
	.citems {
		padding: 40px;
		overflow: auto;
	}
	.action {
		padding: 20px;
		box-shadow: 0 -2px 2px rgb(0 0 0 / 10%);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flexo {
		display: flex;
		justify-content: flex-start;
	}
	.odd {
		justify-content: flex-end;
	}
	.odd :global(.user2) {
		order: 2;
	}
	.odd :global(.maino) {
		align-items: flex-end;
	}
	.odd :global(.user1) {
		display: none;
	}
	.odd :global(.user2) {
		display: flex;
	}
</style>
