import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            hoveredItem: null
        }
    },
    mutations: {
        setHoveredItem(state, item) {
            state.hoveredItem = item
        }
    }
})

export default store;
