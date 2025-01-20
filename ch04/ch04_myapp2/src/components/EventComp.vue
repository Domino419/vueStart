<script>
import {ref} from 'vue' ;
export default {
  setup() {
    const text = ref('');
    const handleClick = () => alert('handleClick!') ;
    const handleDbclick = () => alert('handleDbclick!') ;
    const handleMouseOver = () => alert('handleMouseOver!') ;
    const handleMouseOut = () => alert('handleMouseOut!') ;
    const handleKeydown = (event) => console.log('key Down : ', event.key);
    const handleKeyUp = (event) => console.log('key Up : ', event.key);
    const handleInput = (event) => console.log('Input : ', event.target.value);
    const handleChange = (event) => console.log('Change : ', event.target.value);
    const handleFocus = () => console.log('Focused' );
    const handleBlur = () => console.log('Blurred');
    const handleSumit = () => console.log(`Form submitted with value  : ${text.value} ` );
    const hadleScroll = (event) => console.log('Scrollign : ', event.target.scrollTop);
    const handleContextMenu = () => console.log('Context menu opend ');

    return{
      text, handleClick, handleDbclick, handleMouseOver, handleMouseOut, handleKeydown, handleKeyUp, handleInput, handleChange, handleFocus, handleBlur, handleSumit,
      hadleScroll, handleContextMenu,
    } ;
  },
} ;
</script>

<template>
<div class="bos">
  <h1 class="tittle"> Event Handleing </h1><hr>
  <button @click="handleClick">Click Me</button><hr>
  <button @dblclick="handleDbclick">Double Click Me</button><hr>
  <div @mouseover="handleMouseOver" @mouseout="handleMouseOut" class="notidication"> Mouse Over/Out </div>

<!--오늘은 이까지만 할래..교재에서 178page -->

</div>
</template>

<style scoped>

</style>