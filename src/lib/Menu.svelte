<script lang="ts">
	import { showmenu } from '../routes/stores';
	export let title = 'Play with gameapp.com';
</script>

<header>
	<div class="flexo">
		<span class="material-icons menu" on:click={() => ($showmenu = !$showmenu)}>menu</span>
		<a href="/">
			<span class="material-icons logo">rocket_launch</span>
		</a>
		<div class="head">
			<div class="title">{title}</div>
			<div class="slogan">Play with the rocker app</div>
		</div>
	</div>
	<span class="material-icons user">account_circle</span>
</header>

<style>
	a {
		color: white;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--primary-color);
		padding: 22px;
		color: white;
		font-size: 14px;
	}
	.flexo {
		display: flex;
		align-items: center;
	}
	header .logo {
		margin-right: 10px;
		font-size: 40px;
	}
	header .title {
		font-weight: bold;
		font-size: 18px;
	}
	header .user {
		font-size: 30px;
		cursor: pointer;
	}
	.menu {
		display: none;
		margin-right: 10px;
		cursor: pointer;
	}
	@media (max-width: 1000px) {
		.menu {
			display: block;
		}
	}
</style>
