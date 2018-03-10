<template>
	<div>
		<router-link to="/submissions">back</router-link>
		<p>{{prompt}}</p>
		<p>Find Giphy comp</p>
		<input v-model="searchText">
		<ul>
			<li v-bind:key="index" v-for="(giphs, index) in giphys">
				<img :src="giphs.images.original.url" alt="" :id="giphs.id" @click="submitGiphy">
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'FindGiphy',
	data() {
		return {
			searchText: '',
			giphys: [],
			giphyID: '',
		}
	},
	watch: {
		searchText: function() {
			console.log(this.searchText);
			this.giphyAPI(this.searchText);
		}
	},
	methods: {
		giphyAPI: function(searchText) {
			this.giphys = [];
			const API_KEY = 'oElobWgh2DnTwPw3YcYoFhqkznRk7nuk'
			axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${API_KEY}&limit=10`)
			.then((response) => {
				console.log(response);
				this.giphys = response.data.data;
				// this.giphyID = this.giphys
				console.log(this.giphys);
			})
			.catch((error) => {
				console.warn(error);
			});
		},
		submitGiphy: function(e) {
			// console.log(e.currentTarget.);
		}
	},
	props: ['prompt']
}
</script>

<style lang="scss" scoped>
	ul {
		list-style: none;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;

		li {
			width: 35%;

			img{
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
