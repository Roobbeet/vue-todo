<template>
  <div>
      <input id="addInput" placeholder="new todo..." @keydown.enter="addItem" v-model="userInput"  type="text">
      <button id="addBtn" @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userInput: ''
        }
    },
    methods: {
        addItem() {
            const newItem = {
                name: this.userInput,
                id: this.userInput,
                isDone: false,
                isEditing: false,
            }
            this.$store.dispatch('addNewItem', newItem);
            this.userInput = ''
        },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Source+Sans+Pro:wght@200;400&display=swap');
    #addInput {
        font-family: 'Source Sans Pro', sans-serif;
        border: 1px solid rgb(172, 172, 172);
        border-radius: 5px;
        font-weight: 400;
        padding: 10px;
        width: 300px;
        outline: none;
    }
    #addBtn {
        font-family: 'Source Sans Pro', sans-serif;
        padding: 10px;
        background-color: rgb(175, 252, 226);
        outline: none;
        border: 1px solid  rgb(98, 236, 190);
        margin-left: 20px;
        cursor: pointer;
    }
</style>