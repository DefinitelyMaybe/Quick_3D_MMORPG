<script>
	import { modelData } from '../../data/models/mod.js';

	export let selected;
	let data = [];
	const models = [];

	$: if (selected) {
		data = [];
		for (const key in modelData?.[selected]) {
			const val = modelData[selected][key];
			data.push({ key, val });
		}
	}

	for (const name in modelData) {
		models.push(name);
	}
</script>

<details>
	<summary>Model Data:</summary>
	<label for="">Model:</label>
	<select bind:value={selected} on:change>
		{#each models as name}
			<option value={name}>{name}</option>
		{/each}
	</select>
	{#each data as pair}
		{#if typeof pair.val == 'string'}
			<label for="">{pair.key}</label><input type="text" bind:value={pair.val} /><br />
		{:else if typeof pair.val == 'number'}
			<label for="">{pair.key}</label><input type="number" bind:value={pair.val} /><br />
		{:else if typeof pair.val == 'boolean'}
			<label for="">{pair.key}</label><input type="checkbox" bind:checked={pair.val} /><br />
		{:else}
			<!-- It's an object so ... yeah -->
			<label for="">{pair.key}</label>{pair.val} <br />
		{/if}
	{/each}
	<button
		on:click={() => {
			console.log('Lets add another variable');
		}}>+</button
	>
</details>

<style>
	details {
		background-color: black;
	}
</style>
