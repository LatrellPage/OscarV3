<template>
	<video
		:style="{
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100vw',
			height: '100vh',
			objectFit: 'cover',
		}"
		autoplay
		muted
		loop
		src="../../Assets/videos/gamer-using-lighted-up-mouse-and-keyboard-playing-game-online-free-video.mp4"
	></video>
</template>

<script>
export default {
	name: "App",
	components: {},
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}
</style>
