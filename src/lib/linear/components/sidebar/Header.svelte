<script lang="ts">
	import { clickOutside } from '$lib/linear/utils/clickOutside';
	import ProfilePopup from './ProfilePopup.svelte';
	import WorkspacePopup from './WorkspacePopup.svelte';

	function doShowPopupWorkspace() {
		showPopupWorkspace = true;
	}
	function doShowPopupProfile() {
		showPopupProfile = true;
	}

	let showPopupWorkspace = false;
	let showPopupProfile = false;
</script>

<div
	class="flex flex-col flex-none gap-3 items-stretch py-3 px-4 m-0 text-indigo-50 align-baseline cursor-default"
>
	<div
		class="flex flex-row flex-auto items-center -mr-px -ml-1 align-baseline "
		style="margin-left: -4px; margin-right: -1px;"
	>
		<div class="flex flex-row flex-auto items-center min-w-0 max-w-full align-baseline ">
			<div class="relative flex flex-col">
				<button
					class="flex flex-row flex-initial gap-2 items-center py-2 px-3 m-0 font-sans text-sm text-center text-gray-300 rounded truncate hover:bg-slate-800"
					class:bg-slate-800={showPopupWorkspace}
					on:click={() => {
						doShowPopupWorkspace();
					}}
				>
					<span
						class="profil-icon inline-block object-cover relative flex-shrink-0 w-4 h-4 align-baseline whitespace-nowrap rounded"
						style="line-height: 0px; font-size: 11px;"
						><div
							aria-label="Avatar with initials BW"
							class="flex flex-shrink-0 justify-center items-center w-full h-full text-white align-baseline bg-violet-500 "
						>
							BW
						</div></span
					><span
						color="labelBase"
						class=" text-xs not-italic font-medium text-left align-baseline truncate"
						style="line-height: normal;">bob workspace1l</span
					>
				</button>
				<WorkspacePopup bind:visible={showPopupWorkspace} />
			</div>

			<div class="flex flex-row flex-grow align-baseline " style="min-width: 8px;" />
			<div class=" align-baseline " style="cursor: var(--pointer);">
				<div class="relative flex flex-col">
					<button
						class="flex relative flex-shrink-0 justify-center items-center p-2 m-0 h-full font-sans text-xs font-medium text-center text-gray-300 whitespace-nowrap rounded select-none hover:bg-slate-800"
						type="button"
						style="line-height: normal; transition-property: background; transition-duration: 0ms; box-shadow: none; min-width: 28px;"
						class:bg-slate-800={showPopupProfile}
						on:click={() => {
							doShowPopupProfile();
						}}
					>
						<span
							class="inline-block relative flex-shrink-0 w-4 h-4 align-baseline"
							style="line-height: 0px; font-size: 9px;"
							><div
								aria-label="Avatar with initials UE"
								class="flex flex-shrink-0 justify-center items-center w-full h-full text-white align-baseline bg-indigo-400 "
								style="border-radius: 50%;"
							>
								UE
							</div></span
						>
					</button>

					<ProfilePopup bind:visible={showPopupProfile} />
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-row flex-initial gap-2 align-baseline ">
		<div role="button" class="flex flex-row flex-grow min-w-0 align-baseline select-none">
			<button
				class="inline-flex relative flex-grow flex-shrink-0 justify-center items-center py-0 px-1 m-0 h-6 font-sans text-xs font-medium text-center text-gray-300 whitespace-nowrap bg-gray-800 rounded border border-gray-700 border-solid duration-150 select-none"
				type="button"
				aria-label="Create new issue…"
				style="line-height: normal; transition-property: border, background-color, color, box-shadow, opacity; box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; min-width: 32px;"
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="#858699" class="flex-shrink-0 mr-3">
					<path
						d="M4.75 1.99995C2.67893 1.99995 1 3.67888 1 5.74995V11.2499C1 13.321 2.67893 14.9999 4.75 14.9999H10.2501C12.3212 14.9999 14.0001 13.321 14.0001 11.2499V7.99995C14.0001 7.58574 13.6643 7.24995 13.2501 7.24995C12.8359 7.24995 12.5001 7.58574 12.5001 7.99995V11.2499C12.5001 12.4926 11.4927 13.4999 10.2501 13.4999H4.75C3.50736 13.4999 2.5 12.4926 2.5 11.2499V5.74995C2.5 4.50731 3.50736 3.49995 4.75 3.49995H7C7.41421 3.49995 7.75 3.16416 7.75 2.74995C7.75 2.33574 7.41421 1.99995 7 1.99995H4.75Z"
						class=""
					/>
					<path
						d="M13.4559 1.45667C13.2663 1.39344 13.0571 1.44281 12.9158 1.58419L11.7803 2.71962L13.1945 4.13383L14.33 2.9984C14.4714 2.85702 14.5207 2.6479 14.4575 2.45822C14.2999 1.98535 13.9288 1.61429 13.4559 1.45667Z"
						class=""
					/>
					<path
						d="M12.1339 5.19449L10.7197 3.78028L6.52811 7.97184C5.77184 8.72811 5.25634 9.69132 5.04659 10.7401C5.03143 10.8159 5.09827 10.8827 5.17408 10.8676C6.22284 10.6578 7.18605 10.1423 7.94232 9.38606L12.1339 5.19449Z"
						class=""
					/>
				</svg>
				<div class="flex flex-row flex-grow justify-between items-center align-baseline ">
					New issue
				</div>
			</button>
		</div>
		<div role="button" class="flex flex-row flex-initial min-w-0 align-baseline select-none">
			<button
				aria-label="Search workspace…"
				class="inline-flex relative flex-grow-0 flex-shrink-0 justify-center items-center py-0 px-px m-0 h-6 font-sans text-xs font-medium leading-7 text-center text-gray-300 whitespace-nowrap bg-gray-800 rounded border border-gray-700 border-solid duration-150 select-none"
				type="button"
				style="transition-property: border, background-color, color, box-shadow, opacity; box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; min-width: 28px;"
			>
				<svg width="16" height="16" viewBox="1 1 13 13" fill="#858699" class="flex-shrink-0">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.5 7C9.5 8.38071 8.38071 9.5 7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7ZM9.24822 10.3089C8.60751 10.745 7.83353 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7C11 7.83353 10.745 8.60751 10.3089 9.24822L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L9.24822 10.3089Z"
						class=""
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

<style lang="postcss">
	button.showPopupWorkspace {
		@apply bg-slate-800;
	}

	.profil-icon {
		width: 20px;
		height: 20px;
	}
	.profil-icon > div {
		border-radius: 4px;
	}
</style>
