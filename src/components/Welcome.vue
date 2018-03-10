<template>
	<div class="welcome">
		<h1>{{ title }}</h1>
		<p class="instructions">{{ instructions }}</p>
		<div class="roger" >
			<router-link to='/username'><p>I GET IT, LETS BATTLE!</p></router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: 'welcome',
	data () {
		return {
			title: 'WELCOME TO GIPHY BATTLE!!!!',
			instructions: 'Watch the game screen to see the subject, then choose a Giphy to match it in the funniest, sickest, awesomest, or silliest way possible. Then vote on which Giphys are the best. After each round, the winner is the Giphy with the most votes.',
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.welcome {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;

	h1 {
		font-size: 4rem;
	}

	.instructions {
		width: 75%;
	}

	.roger {
		width: 35%;
		padding: 10px 5px;
		border: 3px solid blue;
	}
}
</style>
