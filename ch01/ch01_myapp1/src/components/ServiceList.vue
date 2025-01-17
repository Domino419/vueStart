<template>
  <div>
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <h2> 상품 정보 </h2>
        <hr />
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
         <li v-for="(book, i) in data" :key="i" class="col">
            <div class="card shadow-sm">
              <img :src="`${book.picUrl}`" alt="`${book.title}`">
              <div class="card-body">
                <h4 class="title" :style="rtext">{{ book.title }}</h4>
                <p class="card-text">카테고리: {{ book.cate }}</p>
                <p class="card-text"></p>
                <div class="d-flex justify-content-between align-content-center">
                  <div class="btn-group">
                    <button @click="increseUp(i)" class="btn btn-sm btn-outline-secondary"> 추천 </button>
                    <button @click="isDetail=true; selectedBook=i" class="btn btn-sm btn-outline-secondary"> 상세보기 </button>
                  </div>
                  <small> 추천수: <span> {{ book.sug}}</span></small>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal modal-sheet d-block bg-body-secondary p-4 py-md-5" v-if="isDetail">
      <div class="modal-dialog">
        <div class="modal-content rounded-4 shadow">
          <BookDetail :book="data[selectedBook]" @closeDetail="isDetail = false" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookDetail from "./BookDetail.vue";
import { data } from "../assets/books";

export default {
  name: "ServiceList", // 컴포넌트 이름
  components: { BookDetail }, // 사용된 컴포넌트 등록
  data() {
    return {
      rtext: "color: red", // 제목 스타일
      isDetail: false, // 상세보기 모달 표시 여부
      data: data, // 책 데이터 배열
      selectedBook: 0, // 선택된 책의 인덱스
    };
  },
  methods: {
    // 추천수를 증가시키는 메서드
    increseUp: function (i) {
      this.data[i].sug += 1; // 선택된 책의 추천 수 증가
    },
  },
};
</script>

<style scoped>
/* 기본 스타일 초기화 */
html, body {
  margin: 0;
  padding: 0;
}

/* 리스트 스타일 제거 */
ul {
  list-style: none;
}

/* 모달 스타일 */
.modal.modal-sheet {
  position: fixed;
  z-index: 999;
  box-sizing: border-box;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

/* 카드 이미지 스타일 */
.card img {
  box-shadow: 0px 1px 3px #ccc;
}

/* 카드 제목 스타일 */
.card .title {
  padding-top: 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>