<script lang="ts">
	import type { AniInfo } from '$lib/structure';

	export let data: AniInfo;
</script>

<div class="w-full h-full flex justify-center align-middle place-items-center">
	<div class="max-w-sm w-full flex flex-col gap-6">
		<div class="flex overflow-x-scroll w-[300px] aspect-square rounded-md">
			{#each data.images as url, _}
				<img
					src="http://127.0.0.1:8090/api/files/pets/{data.id}/{url}"
					alt=""
					class="w-full object-cover shrink-0"
				/>
			{/each}
		</div>
		<h2 class="text-2xl font-bold">{data.title}</h2>

		{@html data.description}
	</div>
</div>
