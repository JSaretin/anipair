<script lang="ts">
	import { goto } from '$app/navigation';
	import type { AniInfo } from '$lib/structure';

	export let pet: AniInfo;
	let image = pet.images[0];

	let book: boolean;

	let data: {
		date: string;
		location: string;
		phone: string;
		meetingCounts: number;
	} = {
		date: '',
		location: '',
		phone: '',
		meetingCounts: 1
	};

	function getInfo() {
		const info: string[] = ['PetID - ' + pet.id, 'Pet Title - ' + pet.title];
		for (const key of Object.keys(data)) {
			info.push(`${key} - ${data[key]}`);
		}
		const url = encodeURI("Hello, I'd like to cross my dog with this\n\n" + info.join('\n'));
		return url;
	}

	async function confirmBooking() {
		let link = `https://wa.me/2349131306787?text=${getInfo()}`;
		// console.log(link);
		await goto(link);
	}
</script>

<div
	class="rounded relative overflow-hidden shadow-md shadow-gray-300 flex flex-col h-[500px] 2xl:h-[350px]"
>
	{#if book}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="text-base lg:text-sm overflow-y-scroll absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm p-4"
			on:keyup
			on:click|self={() => {
				book = false;
			}}
		>
			<form class="flex flex-col gap-4" on:submit|preventDefault={confirmBooking}>
				<label class="text-gray-200 flex flex-col w-full">
					meeting date
					<input
						required
						bind:value={data.date}
						class="p-2 w-full mt-1 rounded text-gray-900"
						type="datetime-local"
					/>
				</label>

				<label class="text-gray-200 flex flex-col w-full">
					location
					<textarea
						required
						bind:value={data.location}
						class="p-2 w-full mt-1 rounded text-gray-900 resize-none"
					/>
				</label>

				<label class="text-gray-200 flex flex-col w-full">
					call number
					<input
						required
						bind:value={data.phone}
						type="text"
						inputmode="numeric"
						class="p-2 w-full mt-1 rounded text-gray-900"
					/>
				</label>

				<label class="text-gray-200 flex flex-col w-full">
					how many meeting
					<input
						required
						bind:value={data.meetingCounts}
						type="text"
						inputmode="numeric"
						class="p-2 w-full mt-1 rounded text-gray-900"
					/>
				</label>

				<button
					type="submit"
					class="bg-green-500 text-center p-3 mt-4 rounded-md text-white font-bold"
					>confirm booking</button
				>
			</form>
		</div>
	{/if}

	<div class="w-full group flex shrink-0 flex-1 overflow-hidden bg-gray-300">
		<img
			src="https://db.anipair.com/api/files/pets/{pet.id}/{image}"
			alt=""
			class="w-full h-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
		/>
	</div>
	<div class="flex p-2 gap-1 overflow-x-scroll">
		{#each pet.images as url, _}
			<button
				class={'h-8 w-8 ' + (url == image ? 'border-2 border-blue-400' : '')}
				on:click={() => {
					if (url == image) return;
					image = url;
				}}
			>
				<img
					src="https://db.anipair.com/api/files/pets/{pet.id}/{url}"
					alt=""
					class="w-full h-full object-cover"
				/>
			</button>
		{/each}
	</div>
	<div class="p-2 flex flex-col gap-1">
		<h2 class=" uppercase text-gray-700 font-medium">{pet.title}</h2>
		<div class="flex justify-between">
			<span
				class="text-xs flex justify-center align-middle place-items-center bg-gray-300 w-1/4 rounded text-gray-700 font-bold"
				>₦10,000</span
			>
			<button
				on:click={() => {
					book = true;
				}}
				class="bg-green-500 p-2 lg:p-1 rounded-md text-white font-bold w-1/3">book</button
			>
		</div>
	</div>
</div>
