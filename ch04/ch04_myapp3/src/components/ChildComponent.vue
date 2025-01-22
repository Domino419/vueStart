<script setup>
import { ref } from 'vue' ;
const props = defineProps({ parentMessage: String });  // 부모 컴포넌트로부터 전달받은 prop을 정의
const emit = defineEmits(['custom-event']) ;      //  커스텀 이벤트를 정의
const childMessage = ref('');                         // 자식 컴포넌트의 메시지를 저장할 ref 변수
const emitCustomEvent = () => {emit('custom-event', childMessage.value)} ;
</script>

<template>
  <div class="card-panel teal lighten-2">
    <h3> Child Component </h3>
    <p> Parent Message : {{ parentMessage }}</p>
    <div class="input-field">
      <input type="text" v-model="childMessage" placeholder="Child Message" />
      <label for="childMessage" class="active" style="color: #fff" >childMessage</label>
    </div>
    <button class="btn" @click="emitCustomEvent"> Send to parent </button>
  </div>
</template>
