<footer>
	<span class="material-icons logo">rocket_launch</span>
	<b class="title">PLAY</b>
	<b>gameapp</b>.com
	<div class="space" />
	<div class="cookie">Cookie statement</div>
	<div class="gameapp">© 2022 gameapp.com</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		background-color: var(--secondary-color);
		padding: 22px;
		color: white;
	}
	footer .logo {
		margin-right: 10px;
	}
	footer .title {
		margin-right: 10px;
	}
	footer .cookie {
		margin-right: 20px;
	}
	footer .space {
		flex: 1;
	}
	@media (max-width: 1000px) {
		.cookie,
		.gameapp {
			display: none;
		}
	}
</style>
