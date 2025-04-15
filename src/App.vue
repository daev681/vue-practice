<template>
  <div class="app">
    <h1>📝 My Todo List</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList },
});
</script>

<style>
.app {
  max-width: 400px;
  margin: 50px auto;
  font-family: sans-serif;
  text-align: center;
}
</style>
