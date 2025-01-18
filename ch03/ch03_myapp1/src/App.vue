<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
    <h1 class="text-xl font-bold text-center"> {{ message }}</h1>
    <input v-model="userInput" class="border border-gray-300 rounded px-4 py-2 w-full" placeholder="type something...." />
    <button @click="handleClick" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"> Click me</button>
    <p v-if="isVisible" class="text-green-500"> This is visible if the condition is true.</p>
    <ul class="list-disc pl-5">
      <li v-for="item in items" :key="item.id"> {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!', isVisible: true, userInput: '',
      items: [{id : 1, name: `Item 1`}, {id : 2, name: `Item 2`}]
    };
  },

  methods: {
    handleClick() { alert(`Button clicked!`); }
  },
  // 여기서 부터
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
