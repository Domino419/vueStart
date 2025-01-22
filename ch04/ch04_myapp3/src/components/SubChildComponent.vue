<script setup>
// Vue에서 defineProps와 defineEmits 함수를 가져옴
import { defineProps, defineEmits } from 'vue';
// 부모 컴포넌트로부터 전달받은 prop을 정의
const props = defineProps({ modelValue: String });
// 커스텀 이벤트를 정의
const emit = defineEmits(['update:modelValue']);
// 입력값이 변경될 때 커스텀 이벤트를 발생시키는 함수
const updateValue = (event) => emit('update:modelValue', event.target.value);
</script>

<template>
 <div class="card-panel blue lighten-2">
   <h3> SubChild Component  </h3>
   <!-- 입력 필드 -->
   <div class="input-field">
     <input id="childInput" :value="modelValue" @input="updateValue"/>
     <label for="childInput" class="active">Child input</label>
   </div>
 </div>
</template>
