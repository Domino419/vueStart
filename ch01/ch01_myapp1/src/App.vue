<template>
  <!-- 최상위 앱 컴포넌트 -->
  <div id="app">
    <ServiceList />   <!-- ServiceList 컴포넌트 렌더링 -->
  </div>
</template>

<script>
import ServiceList from './components/ServiceList.vue';// ServiceList 컴포넌트 임포트

export default {
  name: 'App',          // 컴포넌트 이름 정의
  components: {
    ServiceList          // 자식 컴포넌트 등록
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
