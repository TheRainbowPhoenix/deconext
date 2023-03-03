<script>
	import '../app.postcss';
	import './styles.css';
	import '@unocss/reset/tailwind.css';

	import Header from './Header.svelte';
</script>

<div class="app">
	<header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app,
	main {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		min-height: 100%;
		overflow: hidden;
		-webkit-box-align: stretch;
		align-items: stretch;
	}
</style>
