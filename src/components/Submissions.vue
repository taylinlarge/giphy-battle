<template>
	<div>
		<router-link to="/username">back</router-link>
		<p v-if="this.responsedata.data.question">The phrase is: <br /> "{{this.responsedata.data.question}}"</p>
		<p>Timeleft: {{Math.floor(this.responsedata.data.timeLeftInPhase / 1000)}}s</p>
		<router-link to="/findgiphy">Find Giphy</router-link>
		<ul>
			<li v-bind:key="index" v-for="(gif, index) in responsedata.data.submissions">
				<img :src="gif.giphyURL" alt="" @click="upvote(gif.giphyURL, index)">
				<p>{{gif.username}}</p>
				<p v-if="gif.upvotes.length!=1">{{gif.upvotes.length}} votes</p>
				<p v-else>{{gif.upvotes.length}} vote</p>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
const baseURL = 'http://circuslabs.net:6432';
export default {
	name: 'Submission',
	data() {
		return {
			question: '',
			timeLeft: '',
			phase: '',
			submissions: [],
		}
	},
	methods: {
		upvote: function(votedURL, id) {
			console.log('voted', votedURL);
			axios.post(baseURL + '/upvote/' + id, {username: this.username})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.warn(error);
			});
		},
		// inComingData: function(responsedata) {
		// 	this.question = this.responsedata.data.question;
		// 	this.timeLeft = this.responsedata.data.timeLeftInPhase;
		// 	this.phase = this.responsedata.data.phase;
		// 	this.submissions = this.responsedata.data.submissions;
		// }
	},
	props: ['username', 'responsedata']
}
</script>

<style>

</style>
