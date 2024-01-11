<template>
    <div :class="nav-container">
        <div :class="nav-element">Pc</div>
        <div :class="nav-element">Accessories</div>
        <div :class="nav-element">Discover</div>
        <div :class="nav-element">Shop</div>
    </div>
</template>

<script>
    export default {
	
	data() {
		return {

		};
	},
	methods: {
		
	},
	
};
</script>

<style>
.nav-container{
    width: '50%';
    display: 'flex';
    justify-content: 'space-between';
}

.nav-element{
    width: auto;
    margin: auto;
    color: white;
}
</style>