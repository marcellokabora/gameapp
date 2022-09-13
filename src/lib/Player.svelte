<script lang="ts">
	export let index: number = 0;
</script>

<!-- {#if $myturn} -->
<main class:odd={index % 2}>
	<span class="material-icons user1">person</span>
	<span class="material-icons user2">person</span>
	<div class="maino">
		<slot />
	</div>
</main>

<!-- {/if} -->
<style>
	main {
		display: flex;
		flex: 1;
	}
	.maino {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		text-align: left;
		align-items: flex-start;
	}
	.material-icons {
		height: 40px;
		width: 40px;
		margin: 0 10px;
		padding: 10px;
		height: 30px;
		width: 30px;
	}
	.user1 {
		background-color: var(--primary-color);
		border-radius: 100px;
		align-items: center;
		display: flex;
		justify-content: center;
		color: white;
	}
	.user2 {
		background-color: var(--secondary-color);
		border-radius: 100px;
		align-items: center;
		display: flex;
		justify-content: center;
		color: white;
		display: none;
	}
	.odd {
		justify-content: flex-end;
	}
	.odd .user2 {
		order: 2;
	}
	.odd .maino {
		align-items: flex-end;
	}
	.odd .user1 {
		display: none;
	}
	.odd .user2 {
		display: flex;
	}
</style>
