<script>
export default {
  setup() {
    const handleClick = () => {
      alert('Method Hadle clicked!');
    };
    const showInlineAlert = () => {
      window.alert('Inline Handler');  // window.alert() 명시적으로 호출함.
    };
    const hancleInput = (event) => {
      console.log('Input event: ', event.target.value);
    };
    return {handleClick, showInlineAlert, hancleInput,};
  },
};
</script>

<template>
  <div class="box">
    <h1 class="title">Event Handlers</h1>
    <hr>
    <button @click="handleClick">Method Handler</button>
    <hr>
    <button @click="showInlineAlert">Inline Handler</button>
    <hr>
    <input @input="hancleInput" placeholder="Event Object Handling"/>
  </div>
</template>
