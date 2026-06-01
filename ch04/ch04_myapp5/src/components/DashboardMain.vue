<template>
  <section>
    <!-- 메인 섹션 영역 -->
    <h2>Main Section</h2>

    <!-- form-component: 별도로 만든 폼 컴포넌트 삽입 -->
    <form-component />

    <!-- 동적 컴포넌트 렌더링: currentComponent 값에 따라 다른 컴포넌트 표시 -->
    <component :is="currentComponent" />

    <!-- 버튼 클릭 시 switchComponent 메서드 실행 → currentComponent 변경 -->
    <button @click="switchComponent"> Switch Component </button>

    <!-- async-component: 비동기 로딩된 컴포넌트 -->
    <async-component />  

    <!-- some-async-component: 또 다른 비동기 컴포넌트 -->
    <some-async-component />
  </section>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';  // ref: 반응형 변수, defineAsyncComponent: 비동기 컴포넌트 로딩
import FormComponent from './FormComponent.vue';  // 폼 컴포넌트
import AsyncComponent from './AsyncComponent.vue'; // 비동기 컴포넌트

// 동적 컴포넌트 정의 (비동기 로딩)
const DynamicComponentA = defineAsyncComponent(() => import('./DynamicComponentA.vue'));
const DynamicComponentB = defineAsyncComponent(() => import('./DynamicComponentB.vue'));    
const SomeAsyncComponent = defineAsyncComponent(() => import('./SomeAsyncComponent.vue'));

// 현재 렌더링할 컴포넌트 이름을 추적하는 반응형 변수
const currentComponent = ref('DynamicComponentA'); 

// 버튼 클릭 시 컴포넌트 전환 (A ↔ B)
const switchComponent = () => {
  currentComponent.value = currentComponent.value === 'DynamicComponentA' 
    ? 'DynamicComponentB' 
    : 'DynamicComponentA';
};
</script>

<style scoped>
/* 버튼 스타일 */
button {
    margin-top: 1rem;
}
</style>
