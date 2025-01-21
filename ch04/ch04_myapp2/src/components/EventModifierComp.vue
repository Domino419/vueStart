<script>
export default {
  setup() {
    const handleStop =() => alert('Propagation stopped!') ;
    const handlePrevent =() => alert('Default prevented!') ;
    const handleOnce =() => alert('Click Once!') ;
    const handleSelfKeyup =(event) => console.log('keyup in input :', event.key) ;
    const handlePassiveScroll =(event) => console.log('PassiveScrolling :', event.target.scrollTop) ;

    return{ handleStop, handlePrevent, handleOnce, handleSelfKeyup, handlePassiveScroll,} ;
  },
} ;
</script>

<template>
  <div class="box">
    <h1 class="title"> Event Modifiers </h1><hr>
    <button @click.stop="handleStop">Propagation stopped!!</button><hr>
    <button @click.prevent="handlePrevent">Default prevented!!!</button><hr>
    <button @click.once="handleOnce">Click Once!!!</button><hr>
    <button @click.self="handleSelfKeyup" placeholder="Keyup only on self"/><hr>
    <div @scroll.passive="handlePassiveScroll" style="height: 100px ; overflow: auto ; ">
      <div style="height: 300px ;"> Passive Scroll</div>
    </div>
  </div>
</template>

