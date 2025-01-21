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
    const handleSubmit = () => console.log(`Form submitted with value  : ${text.value} ` );
    const handleScroll = (event) => console.log('Scrollign : ', event.target.scrollTop);
    const handleContextMenu = () => console.log('Context menu opend ');

    return{
      text, handleClick, handleDbclick, handleMouseOver, handleMouseOut, handleKeydown, handleKeyUp, handleInput, handleChange, handleFocus, handleBlur, handleSubmit,
      handleScroll, handleContextMenu,
    } ;
  },
} ;
</script>

<template>
<div class="bos">
  <h1 class="tittle"> Event Handleing </h1><hr>
      <button @click="handleClick">Click Me</button><hr>
   <button @dblclick="handleDbclick">Double Click Me</button><hr>
   <div @mouseover="handleMouseOver" @mouseout="handleMouseOut" class="notification"> Mouse Over/Out </div>
  <input @keydown="handleKeydown" @keyup="handleKeyUp" placeholder="Key Events" />
  <input @input="handleInput"  placeholder="Input Event" />
  <input @change="handleChange"  placeholder="Change Event" />
  <input @focus="handleFocus" @blur="handleBlur" placeholder="Focus" /> <hr>  <!-- hr  콘텐츠 사이의 구분선으로 사용 ,닫는 태그없이 단독사용  -->

  <form @submit.prevent="handleSubmit">
  <input type="text" v-model="text" placeholder="Submit Form" />
    <button type="submit">Submit</button>
  </form>

  <div @scroll="handleScroll" style="height: 100px ; overflow: auto;" >
    <div style="height: 300px;"> Scroll Me </div>
  </div>
  <div @contextmenu.prevent="handleContextMenu"> Right Click Me (contextmenu) </div>
</div>
</template>
