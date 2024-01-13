<template>
    <div class="nav-container">
        <div class="nav-element"  @mouseenter="handleHover('Pc')" >Pc</div>
        <div class="nav-element" @mouseenter="handleHover('Accessories')" >Accessories</div>
        <div class="nav-element" @mouseenter="handleHover('Discover')" >Discover</div>
        <div class="nav-element" @mouseenter="handleHover('Shop')" >Shop</div>
    </div>
</template>

<script>
import { mapActions, mapState} from 'vuex';

    export default {
	
	data() {
		return {
            hoveredItem: null,
		};
	},
    computed: {
        ...mapState(['hoveredItem']),
    },
	methods: {
		...mapActions(['changeHoveredItem']),
        handleHover(item) {
            this.changeHoveredItem(item)
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