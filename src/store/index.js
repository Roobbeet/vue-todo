import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        toDoArray: [
              {
                name: 'Dummy List',
                id: 'Dummy',
                isDone: false,
                isEditing: false,
              },
        ]
    },
    mutations: {
        addItem(state, payload) { //new item will be pushed
            state.toDoArray = [...state.toDoArray, payload]
        },
        deleteItem(state, newArray) { //array baru hasil filter dari index
            state.toDoArray = newArray
        },
        editItem(state, payload) { //change the item only
            state.toDoArray[payload.index].name = payload.newItem;
        },
        markDone(state, index) {
            state.toDoArray[index].isDone = true;
        }
    },
    actions: {
        addNewItem({commit}, payload) {
            commit('addItem', payload)
        },
        deleteItem({commit, state}, payload) { //payload adalah id
            const newArray = state.toDoArray.filter(el => el.id !== payload)
            commit('deleteItem', newArray)
            
        },
        editItemArray({commit}, payload) {//masukin object
            commit('editItem', payload);
            
        },
        markItemDone({commit}, payload) { //index
            commit('markDone', payload)
        }
    }
})

export default store