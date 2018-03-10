<template>
	<div id="app">
		<router-view @usernameentered="setUsername" :username="username" :prompt="prompt"/>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'App',
	data: function() {
		let responseData = {
			username: localStorage.getItem('username'),
			currentSubmissions: [],
			prompt: '',
			timeLeft: '',
		}

		return { responseData };
	},
	created() {
		this.getData();
	},
	methods: {
		getData: function() {
			let baseURL = 'http://circuslabs.net:6432';
			axios.get(baseURL + '/status')
			.then((response) => {
				console.log(response);
				this.prompt = response.data.question;
				this.timeLeft = response.data.timeLeftInPhase;

				if (response && response.data && response.data.submissions) {
					this.currentSubmissions = response.data.submissions;
				} else {
					this.currentSubmissions = [];
				}
				console.log(this.prompt, this.timeLeft, this.currentSubmissions, this.username);
			})
			.catch((error) => {
				console.warn(error);
			});
		},
		setUsername: function(chosenUsername) {
			this.username = chosenUsername;
			localStorage.setItem('username', this.username);
			console.log('username', this.username);
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
