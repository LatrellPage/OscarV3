<template>
	<div>
		<h1>{{ title }}</h1>
		<p>{{ message }}</p>
		
	</div>
</template>

<script>

export default {
	name: "enlargedTutorialsVideo",
	data() {
		return {
			title: "Enlarged Video Tutorial Page",
			message: "This is the enlarged tutorial page component.",
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