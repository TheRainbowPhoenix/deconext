<script lang="ts">
	import Footer from './sidebar/Footer.svelte';
	import Header from './sidebar/Header.svelte';
	import Places from './sidebar/Places.svelte';
</script>

<nav class="relative flex flex-col h-full">
	<Header />
	<Places />
	<Footer />
</nav>

<style>
	nav {
		border-right: 1px solid rgba(55, 65, 81);
	}
</style>
