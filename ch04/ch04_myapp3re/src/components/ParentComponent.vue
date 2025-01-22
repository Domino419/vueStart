<script setup>
import {ref} from 'vue' ;
import ChildComponent from "./ChildComponent.vue";

const parentMessage = ref('Hello From Parent!');
const handleCustomEvent = (message) => {
  parentMessage.value = message;
};  // 자식 컴포넌트로부터 전달받은 메시지로 업데이트
</script>

<template>
  <div class="card-panel teal lighten-4">
    <h2> Parent Component </h2>
    <!-- 자식 컴포넌트를 사용하고 커스텀 이벤트 및 부모 메시지를 바인딩 -->
    <ChildComponent @custom-event="handleCustomEvent" :parentMessage="parentMessage" />

    <!-- 입력 필드 -->
    <div class="input-field">
    <input type="text" v-model="parentMessage" placeholder="ParentMessage" />
    <label for="parentMessage" class="active" style="padding-top: 12px">Parent Message</label>
    </div>
  </div>
</template>
