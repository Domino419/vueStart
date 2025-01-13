<script>
import { ref } from 'vue'; // Vue의 ref API를 가져옴
import MovieList from "@/components/MovieList.vue"; // MovieList 컴포넌트 import

export default {
  components: {
    MovieList, // 등록된 컴포넌트
  },
  setup() {
    // 상태 변수 정의
    const title = ref(''); // 영화 제목
    const openday = ref(''); // 개봉일
    const poster = ref(null); // 영화 포스터 이미지 URL
    const movies = ref([]); // 영화 목록 배열

    /**
     * method: handleFileUpload
     * description: 파일 업로드 이벤트 처리
     * param event: 파일 업로드 이벤트 객체
     */
    const handleFileUpload = (event) => {
      poster.value = URL.createObjectURL(event.target.files[0]); // 선택한 파일의 URL 생성
    };

    /**
     * method: addMovie
     * description: 영화 추가 메서드
     */
    const addMovie = () => {
      // 입력 필드 검증
      if (!title.value || !openday.value || !poster.value) {
        alert('Please fill in all fields'); // 모든 필드가 채워지지 않은 경우 경고
        return;
      }

      // 영화 정보를 movies 배열에 추가
      movies.value.push({
        title: title.value,     // 영화 제목
        openday: openday.value, // 개봉일
        poster: poster.value,   // 포스터 URL
        favorite: 0,            // 좋아요 초기값 0
      });

      // 입력 필드 초기화
      title.value = '';
      openday.value = '';
      poster.value = null;
    };

    /**
     * method: deleteMovie
     * description: 영화 삭제 메서드
     * param index: 삭제할 영화의 배열 인덱스
     */
    const deleteMovie = (index) => {
      movies.value.splice(index, 1); // 해당 인덱스의 영화 제거
    };

    /**
     * method: likeMovie
     * description: 영화 좋아요 수 증가 메서드
     * param index: 좋아요를 추가할 영화의 배열 인덱스
     */
    const likeMovie = (index) => {
      movies.value[index].favorite += 1; // 좋아요 수 증가
    };

    // 반환: 템플릿에서 사용할 데이터와 메서드
    return {
      title,
      openday,
      poster,
      movies,
      handleFileUpload,
      addMovie,
      deleteMovie,
      likeMovie,
    };
  },
};
</script>


<template>
  <div class="app-container">
    <h1> Movie Application</h1>
    <form @submit.prevent="addMovie">    <!-- 영화 추가 폼 -->
      <div class="grid-container">
        <div class="grid-x grid-padding-x">   <!-- 그리드 레이아웃 설정 -->
          <div class="medium-6 cell">
            <label> 영화 제목
              <input v-model="title" type="text" placeholder="Enter movie title" required /></label>  <!-- 영화 제목 입력 필드 -->
          </div>
          <div class="medium-6 cell">
            <label> 개봉일
              <input v-model="openday" type="date" required /></label>  <!-- 개봉일 입력 필드 -->
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="medium-6 cell">
            <label> 영화포스터
              <input @change="handleFileUpload" type="file" accept=".jpg, .png, .gif" required /></label>  <!-- 영화 포스터 업로드 필드 -->
          </div>
          <div class="medium-6 cell">
            <button type="submit" class="button"> Add Movie </button>    <!-- 영화 추가 버튼 -->
          </div>
        </div>
      </div>
    </form>
    <MovieList :movies="movies" @deleteMovie="deleteMovie" @likeMovie="likeMovie" />  <!-- 영화 리스트 컴포넌트 -->
  </div>
</template>

<style>
.app-container {
  padding: 20px;
}
</style>
