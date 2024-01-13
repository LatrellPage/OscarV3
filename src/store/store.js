import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            hoveredItem: null
        }
    },
    actions: {
        changeHoveredItem({commit}, item){
            commit ('setHoveredItem', item);
        }
    },
    mutations: {
        setHoveredItem(state, item) {
            state.hoveredItem = item
        }
    }
})

export default store;
