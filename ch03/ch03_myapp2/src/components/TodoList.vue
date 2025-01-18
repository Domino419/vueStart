<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem, // 컴포넌트 등록
  },
  setup() {
    // todo 항목 배열
    const todos = ref([
      { id: 1, text: 'Vue 3 Composition API 배우기' },
      { id: 2, text: 'TodoList 만들기' },
    ]);

    const newTodo = ref(''); // 새로운 todo 추가 텍스트

    // 새로운 todo 추가 메서드
    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todos.value.push({
          id: todos.value.length + 1,
          text: newTodo.value,
        });
        newTodo.value = ''; // 추가 후 입력값 초기화
      }
    };

    // todo 삭제 메서드
    const removeTodo = (index) => {
      todos.value.splice(index, 1); // 해당 인덱스의 todo 삭제
    };

    // return으로 template에서 사용될 데이터와 메서드 반환
    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
    };
  },
};
</script>

<template>
  <div>
    <h2>Vue 3 Todo List</h2>
    <form @submit.prevent="addTodo" class="pure-form">
      <input v-model="newTodo" type="text" placeholder="Add new todo" class="pure-input-rounded" />
      <button type="submit" class="pure-button pure-button-primary">Add</button>
    </form>
    <ul>
      <TodoItem
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo(index)"
      />
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>