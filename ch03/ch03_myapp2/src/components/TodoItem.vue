<script>
/**
 * Vue 컴포넌트 정의
 * props      : 부모 컴포넌트로부터 전달받는 데이터 정의
 * emits      : 부모 컴포넌트로 이벤트를 전달하는 기능 정의
 * setup      : 컴포넌트 로직 작성 (Composition API 사용)
 */
export default {
  props: {
    /**
     * prop 이름 : todo
     * 타입      : Object
     * 필수 여부 : true (데이터가 반드시 제공되어야 함)
     */
    todo: { type: Object, requested: true },
  },
  emits: ['remove'], // remove 이벤트를 부모 컴포넌트에 전달
  setup(props, { emit }) {
    /**
     * method : remove
     * description : 부모 컴포넌트로 'remove' 이벤트를 전달
     */
    const remove = () => {
      emit('remove'); // 이벤트 방출
    };
    return { remove }; // remove 메서드를 템플릿에서 사용할 수 있도록 반환
  },
};
</script>

<template>
<li class="pure-menu-item">
  <span> {{todo.text}}</span>
  <button @click="remove" class="pure-button pure-button-error"> Remove </button>
</li>
</template>

<style scoped>
/**
 * 스타일 정의
 * 클래스 : pure-menu-item
 * 설명   : 리스트 항목 스타일 지정
 * - display: flex : 요소를 가로로 배치
 * - justify-content: space-between : 요소 간 여백을 균등 분배
 * - margin-bottom: 10px : 하단 여백 추가
 */
.pure-menu-item{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>