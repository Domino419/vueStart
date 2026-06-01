<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
    <h1 class="text-xl font-bold text-center">{{message}}</h1>
    <input v-model="userInput" class="border border-gray-300 rounded px-4 py-2 w-full" placeholder="Enter something..." />
    <button @click="handleClick" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Click me </button>

    <p v-if="isVisible" class="text-green-500">This is visivle if the condition is ture. </p>
    <ul class="list-disc pl-5">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello , vue 3 ! ', isVisible: true, userInput: '',
       items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' } ]
    };
  },
  methods: {
    handleClick() {  alert(`Button clicked! `); }
    },
  computed: {
    reversedMessage() { return this.message.split('').reverse().join('');
    }
  },
  watch: {
    userInput(newValue) { console.log(`User input changed: ${newValue}`);
    }
  },
  mounted() { console.log('Component mounted!');
  }
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
