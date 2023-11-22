<script lang="ts">
	import '../app.css';
</script>

<div class="grid h-screen grid-cols-11">
	<div
		class="hidden lg:flex col-start-1 col-end-3 bg-gray-800 h-full justify-center align-middle place-items-center"
	>
		<div class="flex flex-col bg-white p-6 rounded-md">
			<h2 class="text-xl font-bold text-gray-500 mb-6">Filter</h2>
			<div class="flex flex-col">
				<div class="">
					<h2>Animal</h2>
					<div class="flex gap-4">
						<button>All</button>
						<button>Dogs</button>
						<button>Cats</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-start-1 lg:col-start-3 col-end-12">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		font-family: theme(fontFamily.Montserrat);
	}
</style>
