<template>
    <div class="nav-container">
        <div class="nav-element" @mouseenter="handleHover('Pc')" @mouseleave="handleHover(null)">Pc</div>
        <div class="nav-element" @mouseenter="handleHover('Accessories')" @mouseleave="handleHover(null)">Accessories</div>
        <div class="nav-element" @mouseenter="handleHover('Discover')" @mouseleave="handleHover(null)">Discover</div>
        <div class="nav-element" @mouseenter="handleHover('Shop')" @mouseleave="handleHover(null)">Shop</div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

    export default {
	
	data() {
		return {
            hoveredItem: null,
		};
	},
	methods: {
		...mapMutations(['setHoveredItem']),
        handleHover(item) {
            this.setHoveredItem(item)
        }
	},
	
};
</script>

<style>
.nav-container{
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-between;
}

.nav-element{
    transition: 0.5s ease;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    padding: 5px;
    width: 25%;
    margin: auto;
    cursor: pointer;
    transition: background-color 1s ease;
}

.nav-element:hover{
    background-color:#dddddd94 ;
}

</style>