<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ message }}</p>
		
	</div>
</template>

<script>

export default {
	name: "browseTutorials",
	data() {
		return {
			title: "Browse Tutorial Page",
			message: "This is the browse tutorials page page component.",
		};
	},
	methods: {
		
	},
	
};
</script>

<style scoped>

div {
	margin: 20px;
	color: #333;
}

</style>
