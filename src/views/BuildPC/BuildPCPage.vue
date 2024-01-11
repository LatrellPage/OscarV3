<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ message }}</p>
		
	</div>
</template>

<script>

export default {
	name: "build-your-pc",
	data() {
		return {
			title: "Build your pc Page",
			message: "This is the build your pc page component.",
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