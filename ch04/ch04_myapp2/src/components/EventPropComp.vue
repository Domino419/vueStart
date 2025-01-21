<script>
export default {
  setup () {
    const handleParentClick =() => { alert('Parent clicked') ; } ;
    const handleChildClick  =() => { alert('Child clicked') ; } ;
    return {handleParentClick , handleChildClick, };
  },
} ;
</script>

<template>
<div class="box">
  <h1 class="title"> Event Propagation </h1>
  <div @click="handleParentClick"> parent
  <button @click.stop="handleChildClick"> Child (stops propagation) </button>
  </div>
</div>
</template>

<style scoped>

</style>