<template>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="할 일 입력..." />
        <button type="submit">추가</button>
      </form>
  
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">❌</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'TodoList',
    setup() {
      const newTodo = ref<string>('');
      const todos = ref<string[]>([]);
  
      const addTodo = () => {
        if (newTodo.value.trim()) {
          todos.value.push(newTodo.value.trim());
          newTodo.value = '';
        }
      };
  
      const removeTodo = (index: number) => {
        todos.value.splice(index, 1);
      };
  
      return {
        newTodo,
        todos,
        addTodo,
        removeTodo,
      };
    },
  });
  </script>
  
  <style scoped>
  input {
    padding: 5px;
    width: 60%;
  }
  button {
    margin-left: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-top: 10px;
  }
</style>
  