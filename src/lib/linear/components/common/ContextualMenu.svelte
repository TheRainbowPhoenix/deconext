<script lang="ts">
	import type { MenuItem } from '$lib/linear/types/menu';

	export let items: MenuItem[] = [];

	export let itemSize = 32;
	export let borderSize = 11;

	function computeSize(items: MenuItem[]) {
		return items.length * itemSize + items.filter((x) => !!x.separator).length * borderSize;
	}
</script>

<div style="height: {computeSize(items)}px; width: 100%;">
	{#each items as item, index}
		<div
			style="left: 0px; top: {computeSize(items.slice(0, index))}px; height: {computeSize(
				items.slice(0, index + 1)
			)}; width: auto; min-width: 100%;"
			class="absolute left-0 p-0 m-0 w-auto min-w-full align-baseline border-0"
		>
			<div
				role="button"
				data-column-id="contextual_menu"
				class="flex absolute flex-grow-0 flex-shrink-0 items-center p-0 m-0 min-w-min h-8 text-indigo-50 align-baseline whitespace-nowrap rounded-md border-0 opacity-100 basis-full overflow-ellipsis hover:bg-gray-700 hover:bg-opacity-[0.5]"
				style="transition: color 0s ease 0s; max-width: 186px; content: ''; inset: 0px 4px;"
			>
				<div
					class="flex overflow-hidden flex-row flex-grow items-center py-0 px-3 m-0 h-full align-baseline border-0"
				>
					<span
						color="currentColor"
						class="inline-flex flex-grow items-center p-0 m-0 not-italic text-left align-baseline border-0 truncate"
						style="flex-grow: 1; display: inline-flex; align-items: center; font-weight: normal; line-height: normal; color: currentcolor;"
						><span
							class="flex-grow p-0 my-0 mr-2 ml-0 align-baseline border-0 truncate"
							style="flex-shrink: 0.01;">{item.title}</span
						><span
							class="inline-flex flex-shrink-0 justify-center items-baseline p-0 my-0 mr-0 ml-2 align-baseline border-0"
						>
							{#each item.shortcuts || [] as shortcut, index}
								{#if index > 0}
									<span
										class="then p-0 my-0 text-gray-500 align-baseline border-0"
										style="font-size: 11px;">then</span
									>
								{/if}
								<span class="p-0 m-0 align-baseline border-0">
									<kbd
										class="inline-block p-0 text-sm m-0 font-bold text-center text-gray-500 capitalize align-baseline border-0"
										style="min-width: 1em;">{shortcut}</kbd
									>
								</span>
							{/each}
						</span>
					</span>
				</div>
			</div>
			{#if !!item.separator}
				<div
					class="relative py-1 px-0 m-0 text-white align-baseline border-0 cursor-default"
					style="top: {itemSize}px"
				>
					<div
						class="p-0 m-0 align-baseline border-t-0 border-b border-gray-700 border-solid border-x-0"
					/>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.then {
		margin: 0 0.125rem;
	}
</style>
