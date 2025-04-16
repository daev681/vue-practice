<template>
  <div id="app">
    <h1>나의 할 일 목록</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue'; // 경로 확인!

export default defineComponent({
  name: 'App',
  components: {
    TodoList,
  },
});
</script>