<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ message }}</p>
		
	</div>
</template>

<script>

export default {
	name: "searchPage",
	data() {
		return {
			title: "Search Page",
			message: "This is the search page component.",
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