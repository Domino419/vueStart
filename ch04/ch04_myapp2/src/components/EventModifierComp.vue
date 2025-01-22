<script>
export default {
  setup() {
    // 이벤트 전파를 중단하는 함수
    const handleStop = () => alert('Propagation stopped!');
    // 기본 동작을 중단하는 함수
    const handlePrevent = () => alert('Default prevented!');
    // 한 번만 실행되는 함수
    const handleOnce = () => alert('Click Once!');
    // 키보드 입력 이벤트를 로그로 출력하는 함수
    const handleSelfKeyup = (event) => console.log('keyup in input :', event.key);
    // 스크롤 이벤트를 로그로 출력하는 함수
    const handlePassiveScroll = (event) => console.log('PassiveScrolling :', event.target.scrollTop);

    return { handleStop, handlePrevent, handleOnce, handleSelfKeyup, handlePassiveScroll };
  },
};
</script>

<template>
  <div class="box">
    <h1 class="title">Event Modifiers</h1><hr>
    <!-- 클릭 시 이벤트 전파를 중단 -->
    <button @click.stop="handleStop">Propagation stopped!!</button><hr>
    <!-- 클릭 시 기본 동작을 중단 -->
    <button @click.prevent="handlePrevent">Default prevented!!!</button><hr>
    <!-- 클릭 시 한 번만 실행 -->
    <button @click.once="handleOnce">Click Once!!!</button><hr>
    <!-- 클릭 이벤트가 요소 자체에서만 실행 -->
    <button @click.self="handleSelfKeyup" placeholder="Keyup only on self"/><hr>
    <!-- 스크롤 시 패시브 이벤트 리스너 -->
    <div @scroll.passive="handlePassiveScroll" style="height: 100px; overflow: auto;">
      <div style="height: 300px;">Passive Scroll</div>
    </div>
  </div>
</template>

