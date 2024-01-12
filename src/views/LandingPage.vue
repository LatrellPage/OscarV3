<template>
	<div>
		<div class="parent-positioner-container">
			<div :class="headerAd" :style="hoveredItem !== null ? { backgroundColor: 'black' } : { background: 'linear-gradient(to bottom right, rgb(57, 18, 94), #000000)' }">
				<h1 :style="{ width: 'auto', color: 'white', fontWeight: 400 }">
					Access over $5000 in credit and enjoy fast delivery by 01/01/2025
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a
						:style="{
							fontWeight: '600',
							color: 'white',
							borderBottom: '1px solid white',
							cursor: 'pointer',
							fontSize: '1rem',
							paddingBottom: '1px',
						}"
					>See Details</a
				>
				</h1>
			</div>
			<div class="landing_page_navbar" :style="hoveredItem !==null ? {backgroundColor: 'white', color: 'black', fontWeight: 600} : {color: 'whitesmoke', fontWeight: 500}">
				<div class="svg-logo-container">
					<img :src="hoveredItem !== null ? require('../../Assets/logos/blackLogo.svg')  : require('../../Assets/logos/whiteLogo.svg')" alt="" class="svg-logo">
				</div>
				<NavElements />
				<div class="icon-container">
					<font-awesome-icon icon="magnifying-glass" :style="hoveredItem !==null ? { color: 'black', cursor: 'pointer'} : {color: 'white', cursor: 'pointer'}" />
					<font-awesome-icon icon="fa-regular fa-circle-user" :style="hoveredItem !==null ? { color: 'black', cursor: 'pointer', fontSize: '1.2rem'} : {color: 'white', cursor: 'pointer', fontSize: '1.2rem'}" />
				</div>
			</div>

			<div class="dropdown" :style="dropDownStyle">Hello</div>
		</div>
		<video
			:style="videoStyle"
			autoplay
			muted
			loop
			src="../../Assets/videos/gamer-using-lighted-up-mouse-and-keyboard-playing-game-online-free-video.mp4"
		></video>

		<div class="centered-container">
			<div :style="hoveredItem !== null ? {filter: 'blur(20px)', transition: 'filter 1s ease', display: 'flex', justifyContent: 'center', alignItems: 'center'} : {display: 'flex', justifyContent: 'center', alignItems: 'center'}">
				<h1 :style="hoveredItem !== null ? {filter: 'blur(20px)', transition: 'filter 1s ease'} : {fontSize: '2rem', fontWeight: '600', color: 'whitesmoke', marginLeft: 'auto', marginRight: 'auto'}">Frame Wins</h1>
			</div>
			<h2 :style="hoveredItem !== null ? {filter: 'blur(20px)', transition: 'filter 1s ease'} : {fontSize: '1.2rem', fontWeight: '500', color: 'whitesmoke',}">High FPS, Low Monthly Payments</h2>
		</div>

		<div class="bottom-container" :style="hoveredItem !== null ? {filter: 'blur(20px)', transition: 'filter 1s ease'} : {}">
			<div class="button-container">
				<div class="button-one">Demo and Tutorials</div>
				<div class="button-two">Build Your Pc</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavElements from "@/components/NavElements.vue";
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['hoveredItem']),
		dropDownStyle() {
			return this.hoveredItem !== null ? {height: '60vh', opacity: 1} : { height: '0vh', opacity: 0};
		},
		videoStyle(){
			return{
        position: 'fixed',
        top: '0',
		boxShadow: 0,
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
		filter: this.hoveredItem !== null ? 'blur(20px)' : '',
		transition: 'filter 1.5s ease',
		}
		},
	},
	components: {
		NavElements,
	},

	data() {
		return {
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


.parent-positioner-container{
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
}

.header-ad {
	transition: 0.5s ease;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: whitesmoke;
	z-index: 999;
	font-size: 0.5rem;
	background-repeat: no-repeat;
	height: 2.5rem;
}

.landing_page_navbar {
	z-index: 999;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 2.5rem;
	transition: background-color 0.99s ease;
}

.svg-logo-container{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 10%;
}

.svg-logo{
	width: 100%;
	height: 50%;
	object-fit: cover;
}

.icon-container{
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 10%;
	height: 100%;
}

.dropdown {
	z-index: 999;
    display: block;
    background-color: white;
    width: 100%; 
    transition: height 0.5s ease, opacity 1s ease;
}

.centered-container {
	width: fit-content;
	height: fit-content;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
}


.bottom-container{
	width: 100%;
	height: 20%;
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.button-container{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 35%;
	font-weight: 600;
}

.button-one{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15rem;
	height: 2.5rem;
	border-radius: 5px;
	background-color: rgba(211, 210, 210, 0.666);
	color: #333333;
	cursor: pointer;
}

.button-two{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15rem;
	height: 2.5rem;
	border-radius: 5px;
	background-color: rgba(61, 60, 60, 0.888);
	color: whitesmoke;
	cursor: pointer;
}

</style>
