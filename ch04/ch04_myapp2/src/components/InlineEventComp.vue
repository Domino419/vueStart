<script>
 export default {
   setup() {
     const showAlert =()=> {window.alert('Button Clicked! ') ; };
     const handleClick =(message) => {alert(message);};
     return{ showAlert, handleClick, };
   },
 };
</script>

<template>
<div class="box">
  <h1 class="title"> Inline Events</h1><hr>
  <button @click="showAlert">Click Inline!</button> <hr>
  <button @click="handleClick('With Data')">Click With data binding! </button>
</div>
</template>
