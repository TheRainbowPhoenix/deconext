<script lang="ts">
	import type { ChannelPage } from './types';

	export let data: ChannelPage;
</script>

<svelte:head>
	<title>DeCoNeXt</title>
</svelte:head>

<div class="app">
	<div class="bg" />
	{JSON.stringify(data)}
	<div class="layers layers-rel">
		<!-- each layers -->
		<div aria-hidden="false" class="layer baseLayer">
			<div class="container">Hello</div>
		</div>
	</div>
</div>
