<script lang="ts">
	import { rooms, myturn, loadturn } from '../stores';
	import Number from '$lib/Number.svelte';
	import Formula from '$lib/Formula.svelte';
	import { page } from '$app/stores';
	import Player from '$lib/Player.svelte';
	$: room = $rooms.filter((room) => room.id === $page.params.room)[0];
</script>

<svelte:head>
	<title>GameApp | {room.name}</title>
</svelte:head>

<div class="items" id="scroller">
	<div class="citems">
		{#if room.game}
			{#each room.game as item, index}
				<div class="flexo">
					<Player {index}>
						<Formula {item} />
					</Player>
				</div>
			{/each}
		{/if}
		{#if $myturn}
			<Player>
				<Number />
			</Player>
		{/if}
		{#if $loadturn}
			<Player index={1}>
				<div class="loading">
					<span class="material-icons">hourglass_top</span>
					<span>Loading...</span>
				</div>
			</Player>
		{/if}
	</div>
</div>

<style>
	.loading {
		display: flex;
		align-items: center;
		font-size: 16px;
		color: grey;
		margin-top: 7px;
	}
	.loading .material-icons {
		font-size: 35px;
	}
	.loading span {
		margin-right: 10px;
		margin-left: -5px;
	}
	.items {
		flex: 1;
		overflow: auto;
		width: 100%;
	}
	.citems {
		padding: 40px;
		overflow: auto;
	}
	.flexo {
		display: flex;
		justify-content: flex-start;
		margin: 10px 0;
	}
	@media (max-width: 1000px) {
		.citems {
			padding: 20px;
		}
	}
</style>
