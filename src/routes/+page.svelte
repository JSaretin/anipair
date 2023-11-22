<script lang="ts">
	import type { AniInfo } from '$lib/structure';
	import { writable, type Writable } from 'svelte/store';
	import Pet from './Pet.svelte';

	const aniInfos: Writable<AniInfo[]> = writable([]);

	export let data: { aniInfors: AniInfo[] };
	$aniInfos = data.aniInfors;
</script>

<div class="w-full p-1 lg:p-6">
	<h2 class="text-2xl text-gray-800 uppercase font-bold">Meeting</h2>
	<div class="mt-6 text-sm grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 w-full mx-auto">
		{#each [...$aniInfos].reverse() as pet (pet.id)}
			<Pet {pet} />
		{/each}
	</div>
</div>
