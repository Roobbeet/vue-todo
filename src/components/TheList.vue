<template>
  <div class="list-container">
      <ol>
          <li class="items " v-for="(item, index) in toDo" :key="index">
            <h3 :class="item.isDone ? 'done' : null" v-if="!item.isEditing">{{item.name}}</h3>
            <input v-model="editedItem" v-if="item.isEditing" type="text">
        <div class="icon-container">
          <font-awesome-icon @click="deleteItem(item.id)" :icon="['fas', 'times']"></font-awesome-icon>
          <font-awesome-icon v-if="!item.isDone" @click="markDone(index)" :icon="['fas', 'check-circle']"></font-awesome-icon>
          <font-awesome-icon @click="item.isEditing ? submitEdit(index) : setEdit(index)" :icon="['fas', 'pencil-alt']"></font-awesome-icon>
        </div>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedItem: ''
    }
  },
  computed: {
    toDo() {
      return this.$store.state.toDoArray
    }
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('deleteItem',id)
    },
    markDone(index) {
      this.$store.dispatch('markItemDone', index)
    },
    setEdit(index) {
      this.toDo[index].isEditing = !this.toDo[index].isEditing;
      this.editedItem = this.toDo[index].name;
    },
    submitEdit(index) {
      this.toDo[index].isEditing = !this.toDo[index].isEditing;
      const itemToEdit = {
        newItem: this.editedItem,
        index: index
      }
      if(this.editedItem != '') {
        this.$store.dispatch('editItemArray', itemToEdit)
      }
    }
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
  .items {
    min-width: 150px;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
  .done {
    text-decoration: line-through;
  }
  h3 {
    font-family: 'Itim', cursive;
    font-size: 25px;
  }
  li input {
        font-family: 'Source Sans Pro', sans-serif;
        border: 1px solid rgb(172, 172, 172);
        border-radius: 5px;
        font-weight: 400;
        padding: 10px;
        width: 300px;
        outline: none;
  }
  .icon-container {
    display: flex;
    width: 75px;
    justify-content: space-evenly;
    font-family: 'Itim', cursive;
    cursor: pointer;
  }
</style>