<script lang="ts">
	import { clickOutside } from '$lib/linear/utils/clickOutside';
	import { onDestroy, onMount } from 'svelte';

	export let visible = false;

	const doClose = () => {
		visible = false;
	};
</script>

<div
	class:visible
	class="popup hidden absolute p-0 m-0 text-white align-baseline rounded-lg border border-gray-700 shadow-xl shadow-dark-900 border-solid cursor-default pointer-events-auto bg-gray-800"
>
	<div class="captive fixed -z-10 top-0 left-0 w-full h-full" on:click={doClose} />
	<div
		class="flex overflow-hidden flex-col flex-initial p-0 m-0 w-64 align-baseline rounded divide-y divide-gray-700"
		data-focus-trap-active="true"
		style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; max-width: 100vw; max-height: 751.778px;"
	>
		<div class="flex overflow-auto flex-col flex-initial p-3 m-0 align-baseline border-0">
			<div class="p-0 mx-0 mt-0 mb-3 leading-4 align-baseline border-0">
				<span
					type="smallPlus"
					color="labelMuted"
					class="p-0 m-0 text-sm not-italic font-medium text-left text-gray-500 text-bold align-baseline border-0"
					style="line-height: normal;">username@example.com</span
				>
			</div>
			<a
				class="py-1 px-3 m-0 text-indigo-50 align-baseline rounded border-0 hover:bg-gray-700 hover:bg-opacity-[0.5]"
				href="https://linear.app/bob-workspace"
				style="text-decoration: none;"
				><div class="flex flex-row flex-initial items-center p-0 m-0 align-baseline border-0">
					<span
						class="inline-block object-cover relative flex-shrink-0 p-0 my-0 mr-2 ml-0 w-4 h-4 align-baseline rounded border-0"
						style="line-height: 0px; font-size: 9px;"
						><div
							aria-label="Avatar with initials BW"
							class="flex flex-shrink-0 justify-center items-center p-0 m-0 w-full h-full align-baseline bg-violet-500 border-0"
						>
							BW
						</div></span
					><span
						type="smallPlus"
						color="labelBase"
						title="bob workspace1l"
						class="p-0 mt-0 mr-1 mb-px ml-0 w-full text-xs not-italic font-medium text-left text-gray-300 align-baseline border-0 truncate"
						style="line-height: normal;">bob workspace1l</span
					><svg
						width="16"
						height="12"
						viewBox="0 0 16 12"
						fill="#dcd8fe90"
						class="flex-shrink-0 w-3 leading-6"
						style="fill: rgb(87, 91, 199);"
					>
						<path
							d="M4.93942 9.69781L1.62578 6.38648C1.25336 6.01431 0.651746 6.01431 0.27932 6.38648C-0.0931065 6.75865 -0.0931065 7.35984 0.27932 7.73201L4.27096 11.7209C4.64339 12.093 5.245 12.093 5.61743 11.7209L15.7207 1.62465C16.0931 1.25248 16.0931 0.651292 15.7207 0.279125C15.3483 -0.0930417 14.7466 -0.0930417 14.3742 0.279125L4.93942 9.69781Z"
							class=""
						/>
					</svg>
				</div></a
			>
		</div>
		<div class="flex flex-col flex-initial p-1 m-0 align-baseline">
			<a
				class="p-2 m-0 leading-none text-indigo-50 align-baseline rounded border-0 hover:bg-gray-700 hover:bg-opacity-[0.5]"
				href="https://linear.app/settings/workspace"
				style="text-decoration: none;"
				><span
					type="mini"
					color="labelBase"
					class="p-0 m-0 text-sm not-italic text-left text-gray-300 align-baseline border-0"
					style="font-weight: normal; line-height: normal;">Workspace settings</span
				></a
			><a
				class="p-2 m-0 leading-none text-indigo-50 align-baseline rounded border-0 hover:bg-gray-700 hover:bg-opacity-[0.5]"
				href="https://linear.app/join"
				style="text-decoration: none;"
				><div class="flex flex-row flex-initial justify-between p-0 m-0 align-baseline border-0">
					<div class="p-0 m-0 align-baseline border-0">
						<span
							type="mini"
							color="labelBase"
							class="p-0 m-0 text-sm not-italic text-left text-gray-300 align-baseline border-0"
							style="font-weight: normal; line-height: normal;">Create or join a workspace</span
						>
					</div>
				</div></a
			><a
				class="p-2 m-0 leading-none text-indigo-50 align-baseline rounded border-0 hover:bg-gray-700 hover:bg-opacity-[0.5]"
				href="https://linear.app/add-account"
				style="text-decoration: none;"
				><span
					type="mini"
					color="labelBase"
					class="p-0 m-0 text-sm not-italic text-left text-gray-300 align-baseline border-0"
					style="font-weight: normal; line-height: normal;">Add an account</span
				></a
			>
		</div>
		<div class="flex flex-col flex-initial p-1 m-0 align-baseline">
			<button
				type="button"
				class="inline p-2 m-0 font-sans text-sm leading-none text-left text-indigo-50 bg-transparent rounded border-0 duration-150 select-none hover:bg-gray-700 hover:bg-opacity-[0.5]"
				style="transition-property: color;"
			>
				<span
					type="mini"
					color="labelBase"
					class="p-0 m-0 text-sm not-italic text-gray-300 align-baseline border-0 duration-150"
					style="font-weight: normal; line-height: normal; transition-property: color, fill;"
					>Log out</span
				>
			</button>
		</div>
	</div>
</div>

<style>
	.popup {
		top: 2.75rem; /* Todo: calc this !! */
		z-index: 80;
	}

	.popup.visible {
		display: block;
		visibility: visible;
	}
</style>
