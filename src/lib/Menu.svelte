<script lang="ts">
	export let title = 'Play with gameapp.com';
</script>

<header>
	<span class="material-icons logo">rocket_launch</span>
	<div class="head">
		<div class="title">{title}</div>
		<div class="slogan">Win the game or win the job</div>
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		background-color: var(--primary-color);
		padding: 22px;
		color: white;
		font-size: 14px;
	}
	header .logo {
		margin-right: 10px;
		font-size: 40px;
	}
	header .title {
		font-weight: bold;
		font-size: 18px;
	}
</style>
