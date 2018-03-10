<template>
	<div id="app">
		<router-view @usernameentered="setUsername" @submittedgiphy="selectedGiphy" :username="username" :responsedata="responseData"/>
	</div>
</template>

<script>
import axios from 'axios'
const baseURL = 'http://circuslabs.net:6432';
export default {
	name: 'App',
	data: function() {
		let username = localStorage.getItem('username');
		let responseData = {};

		return { username, responseData };
	},
	created() {
		this.getData();
		var refresh = setInterval(() => { this.getData() }, 1000);
	},
	methods: {
		getData: function() {
			axios.get(baseURL + '/status')
			.then((response) => {
				console.log(response);
				this.responseData = response;
				console.log(this.responseData)
			})
			.catch((error) => {
				console.warn(error);
			});
		},
		setUsername: function(chosenUsername) {
			this.username = chosenUsername;
			localStorage.setItem('username', this.username);
			console.log('username', this.username);
		},
		selectedGiphy: function(giphyURL) {
			axios.post(baseURL + '/submission', {giphyURL: giphyURL, username: this.username})
			.then((response) => {
				console.log(response);
				// this.getData();
			})
			.catch((error) => {
				console.warn(error);
			});
		}
	},
}
</script>

<style>
#app {
	width: 100vw;
	height: 100vh;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	text-align: center;
}
</style>
