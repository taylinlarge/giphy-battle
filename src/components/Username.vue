<template>
	<div>
		<h1>CHOOSE YOUR WARRIOR'S NAME!</h1>
		<input v-model="chosenUsername">
		<router-link to="/submissions">LETS BATTLE</router-link>
	</div>
</template>

<script>
export default {
	name: 'Username',
	data: function() {
		return { chosenUsername: '' }
	},
	watch: {
		chosenUsername: function() {
			// console.log('username passed', this.chosenUsername);
			this.$emit('usernameentered', this.chosenUsername);
		}
	}
}
</script>

<style>

</style>
