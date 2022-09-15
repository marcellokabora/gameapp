<script>
	import '../app.css';
	import { rooms, showmenu } from './stores';
	import Menu from '$lib/Menu.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	$: room = $rooms.filter((room) => room.id === $page.params.room)[0];
</script>

<svelte:head>
	<title>GameApp | Welcome</title>
</svelte:head>

<main>
	<Menu title={room?.name} />
	<div class="main">
		<div class="rooms" class:show={$showmenu}>
			<div class="title">Choose your game room</div>
			{#each $rooms as room}
				<a href={room.id}>
					<div class="room" class:active={$page.params.room === room.id}>
						<span>{room.name}</span>
						<span class="material-icons logo">keyboard_arrow_right</span>
					</div>
				</a>
			{/each}
		</div>
		<div class="game">
			<slot />
		</div>
	</div>
	<Footer />
</main>

<style lang="css">
	main {
		display: flex;
		/* align-items: center;
		justify-content: center; */
		flex-direction: column;
		overflow: auto;
		height: 100vh;
		/* width: 100%; */
		overflow: hidden;
		margin: 0;
		/* max-width: 500px; */
	}

	.main {
		flex: 1;
		display: flex;
		background-color: var(--background-color);
		overflow: hidden;
	}
	.main .title {
		margin: 20px 0;
	}
	.rooms {
		padding: 0 20px;
		font-weight: bold;
	}
	.rooms a {
		color: black;
		text-decoration: none;
	}
	.room {
		margin: 10px 0;
		background-color: white;
		padding: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 230px;
		cursor: pointer;
	}
	.room:hover {
		background-color: var(--btn-hover);
	}
	.room.active {
		background-color: var(--primary-color);
		color: white;
	}
	.game {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: auto;
		overflow: hidden;
		margin: 0;
		/* max-width: 500px; */
		background-color: white;
	}
	@media (max-width: 1000px) {
		.rooms {
			display: none;
			position: absolute;
			box-shadow: 0px 0px 5px black;
			height: calc(100% - 155px);
			background-color: white;
		}
	}
	.rooms.show {
		display: inline !important;
	}
</style>
