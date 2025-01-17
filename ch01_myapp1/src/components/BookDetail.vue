<template>
  <div>
    <!-- 모달 헤더: 제목과 닫기 버튼 -->
    <div class="modal-header border-bottom-0">
      <h1 class="modal-title fs-5">{{ book.title}}</h1>
      <button type="button" class="btn-close" @click="$emit('closeDetail')"></button>
    </div>
    <hr />
    <!-- 책 표지 이미지 -->
    <img :src ="book.picUrl" :alt="book.title" style ="max-width: 200px;"/>
    <hr />
    <!-- 모달 본문: 책 정보 표시 -->
    <div class="modal-body py-0">
      <p> 카테고리 : {{book.cate}} / 출간일 : {{book.pubdate}}</p>
      <p> 페이지 수 : {{book.pages}} / 가격 : {{book.price}}</p>
    </div>
    <!-- 모달 푸터: 버튼들 -->
    <div class="modal-footer flex-column align-items-stretch w-100 gap-2 border-top-0">
    <button type="button" class="btn lg btn-primary"> buy </button>/
    <button type="button" @click="$emit('closeDetail')" class="btn btn-lg btn-secondary"> Close </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookDetail", // 컴포넌트 이름
  props: {    // 부모 컴포넌트에서 전달받는 데이터
    book: {
      type: Object, // book은 객체 타입이어야 함
      required: true, // 필수 값으로 설정
    },
  },
};
</script>