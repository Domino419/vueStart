<template>
<div :class="$style.container">
  <h1> Vue 3 app with PureCss </h1>
  <slot></slot>  <!--기본 슬록 -->
</div>
</template>

<style module>
.container {padding: 20px ; background-color: #f4f4f4 ;}
</style>