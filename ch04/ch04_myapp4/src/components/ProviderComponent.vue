<script setup>
import {provide, ref} from "vue";
const message = ref("Hello From Provide");
provide("message", message);
const changeMessage = () => {
  message.value = 'Message Updated !! ';
};
</script>

<template>
  <div>
    <h2> Provoder Component </h2>
    <button @click="changeMessage"> Change Message !!</button>
    <slot></slot>
  </div>
</template>

