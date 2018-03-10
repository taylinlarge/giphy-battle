<template>
	<div>
		<router-link to="/username">back</router-link>
		<p>Submission component</p>
		<p>{{username}}</p>
		<p>{{prompt}}</p>
		<router-link to="/findgiphy">Find Giphy</router-link>
	</div>
</template>

<script>
export default {
	name: 'Submission',
	data() {
		return {

		}
	},
	props: ['username', 'prompt']
}
</script>

<style>

</style>
