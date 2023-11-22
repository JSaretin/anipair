<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { AniInfo } from '$lib/structure';
	import { writable, type Writable } from 'svelte/store';

	// const imageUri = env.PUBLIC_DATABASE_URI;

	const aniInfos: Writable<AniInfo[]> = writable([]);

	export let data: { aniInfors: AniInfo[] };
	$aniInfos = data.aniInfors;
</script>

<div class="w-full p-6">
	<h2 class="text-2xl text-gray-800 uppercase font-bold">Meeting</h2>
	<div class="mt-6 text-sm grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 w-full mx-auto">
		{#each [...$aniInfos].reverse() as aniInfo (aniInfo.id)}
			<div
				class="rounded overflow-hidden shadow-md shadow-gray-300 flex flex-col h-[500px] 2xl:h-[350px]"
			>
				<div
					class="w-full flex shrink-0 flex-1 overflow-x-scroll snap-proximity snap-x bg-gray-300"
				>
					{#each aniInfo.images as url, _}
						<div class="shrink-0 w-full h-full snap-center">
							<img
								src="https://db.anipair.com/api/files/pets/{aniInfo.id}/{url}"
								alt=""
								class="w-full h-full object-cover"
							/>
						</div>
					{/each}
				</div>
				<div class="p-2 flex flex-col gap-1">
					<h2 class=" uppercase text-gray-700 font-medium">{aniInfo.title}</h2>
					<div class="flex justify-between">
						<span
							class="text-xs flex justify-center align-middle place-items-center bg-gray-300 w-1/4 rounded text-gray-700 font-bold"
							>$15,000</span
						>
						<button class="bg-green-500 p-2 lg:p-1 rounded-md text-white font-bold w-1/3"
							>book</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
