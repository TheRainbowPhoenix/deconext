<script lang="ts">
	import type { MenuItem } from '$lib/linear/types/menu';
	import { clickOutside } from '$lib/linear/utils/clickOutside';
	import { onDestroy, onMount } from 'svelte';
	import ContextualMenu from '../common/ContextualMenu.svelte';

	export let visible = false;

	const doClose = () => {
		visible = false;
	};

	let menu: MenuItem[] = [
		{
			title: 'View Profile',
			shortcuts: ['O', 'M']
		},
		{
			title: 'Settings',
			shortcuts: ['G', 'S']
		},
		{
			title: 'Download desktop app',
			separator: true
		},
		{
			title: 'Help',
			shortcuts: ['?']
		},
		{
			title: 'Changelog'
		},
		{
			title: 'Documentation'
		},
		{
			title: 'Join Slack community',
			separator: true
		},
		{
			title: 'Log Out',
			shortcuts: ['Alt', 'Q']
		}
	];
</script>

<div
	class:visible
	class="popup hidden absolute p-0 m-0 text-white align-baseline rounded-lg border border-gray-700 shadow-xl shadow-dark-900 border-solid cursor-default pointer-events-auto bg-gray-800"
>
	<div class="captive fixed -z-10 top-0 left-0 w-full h-full" on:click={doClose} />
	<div data-focus-trap-active="true" class="p-0 m-0 align-baseline border-0">
		<div
			tabindex="0"
			role="menu"
			data-column-id="contextual_menu"
			class="flex overflow-hidden flex-col flex-grow flex-shrink py-1 px-0 m-0 min-w-min text-xs align-baseline border-0"
			style="min-width:min-content"
		>
			<span
				data-column-id="contextual_menu"
				style="border:0px;clip:rect(0px,0px,0px,0px);height:1px;margin:-1px;overflow:hidden;padding:0px;position:absolute;width:1px;white-space:nowrap;overflow-wrap:normal"
				class="align-baseline sr-only"
				><input
					type="text"
					placeholder="Filter…"
					spellcheck="false"
					autocomplete="off"
					id="up8t-search"
					class="flex-grow flex-shrink-0 py-2 px-3 mx-0 mb-0 -mt-1 w-full h-8 font-sans whitespace-nowrap appearance-none cursor-text text-zinc-200 caret-indigo-500"
					value=""
					style="grid-area: 1 / 1 / auto / auto; outline: none;"
				/></span
			>
			<div
				style="position:relative;height:278px;width:186px;overflow:auto;will-change:transform;direction:ltr;z-index:99"
				class="overflow-auto relative p-0 m-0 w-48 align-baseline border-0 will-change-transform"
			>
				<ContextualMenu items={menu} />
			</div>
		</div>
	</div>
</div>

<style>
	.popup {
		top: 2.5rem; /* Todo: calc this !! */
		z-index: 80;
	}

	.popup.visible {
		display: block;
		visibility: visible;
	}
</style>
