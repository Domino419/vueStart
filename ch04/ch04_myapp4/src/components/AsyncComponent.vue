<script setup>
import {defineAsyncComponent} from 'vue';
// const AsyncComponent = defineAsyncComponent( () => import("./SomeAsyncComponent.vue").default);   정오표에 없으나 에러나는 부분
const AsyncComponent = defineAsyncComponent(() => import("./BaseComponent.vue"));  // 정오표에 없으나 수정
</script>

<template>
<div>
  <h2> AsyncComponent </h2>
  <AsyncComponent />
</div>
</template>
