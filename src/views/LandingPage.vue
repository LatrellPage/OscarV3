<template>
	<div :class="headerAd">
		<h1 :style="{ width: 'auto', color: 'white', fontWeight: 400 }">
			Access over $5000 in credit and enjoy fast delivery by 01/01/2025
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
				:style="{ fontWeight: '600', color: 'white' , textDecoration: 'underline', cursor: 'pointer'}"
				>See Details</a
			>
		</h1>
	</div>
	<div :class="landing_page_navbar">
		<svg></svg>
		<NavElements/>
		
	</div>
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
import NavElements from '@/components/NavElements.vue';


export default {

	data() {
		return {
			componenets: {
				NavElements
			},
			headerAd: "header-ad",
		};
	},
};
</script>

<style scoped>

body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}

h1 {
	margin: 0;
	padding: 0;
}

.header-ad {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	z-index: 999;
	font-size: 0.6rem;
	background: linear-gradient(to right, #370e3c, #000000);
	background-repeat: no-repeat;
	height: 2.5rem;
}

.landing_page_navbar{
	position: absolute;
	left: 0;
	display: flex;

}

</style>
