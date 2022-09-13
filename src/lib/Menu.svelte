<script lang="ts">
	export let title = 'Play with gameapp.com';
</script>

<header>
	<div class="flexo">
		<span class="material-icons logo">rocket_launch</span>
		<div class="head">
			<div class="title">{title}</div>
			<div class="slogan">Play with the rocker app</div>
		</div>
	</div>
	<span class="material-icons user">account_circle</span>
</header>

<style>
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
</style>
