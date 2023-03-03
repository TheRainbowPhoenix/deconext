<script lang="ts">
	import Sidebar from '$lib/linear/components/Sidebar.svelte';
</script>

<svelte:head>
	<title>LinearApp</title>
</svelte:head>

<div
	class="app flex overflow-hidden flex-row items-stretch w-full h-full min-h-full
text-indigo-50 align-baseline cursor-default"
>
	<div class="sidebar">
		<Sidebar />
	</div>
	<div class="container" />
</div>

<style lang="postcss">
	.app {
	}
</style>
