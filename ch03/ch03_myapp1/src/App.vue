<template>
  <!-- 컴포넌트 템플릿 -->
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
    <!-- 메인 메시지를 표시하는 제목 -->
    <h1 class="text-xl font-bold text-center"> {{ message }}</h1>
    <!-- 사용자 입력 필드 -->
    <input v-model="userInput" class="border border-gray-300 rounded px-4 py-2 w-full" placeholder="type something...." />
    <!-- 클릭 이벤트가 연결된 버튼 -->
    <button @click="handleClick" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"> Click me</button>
    <!-- 조건부로 표시되는 텍스트 -->
    <p v-if="isVisible" class="text-green-500"> This is visible if the condition is true.</p>
    <!-- 아이템 목록 -->
    <ul class="list-disc pl-5">
      <li v-for="item in items" :key="item.id"> {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // data 옵션: 컴포넌트의 상태를 정의
  data() {
    return {
      message: 'Hello, Vue 3!', // 화면에 표시될 메시지
      isVisible: true,          // 조건부 렌더링을 위한 플래그
      userInput: '',            // 사용자 입력 데이터를 저장
      items: [                  // 렌더링할 목록 데이터
        { id: 1, name: `Item 1` },
        { id: 2, name: `Item 2` }
      ]
    };
  },
  // methods 옵션: 컴포넌트에서 실행할 메소드를 정의
  methods: {
    /**
     * method        : handleClick
     * date          : 2025-01-18
     * description   : 버튼 클릭 시 경고창 표시
     */
    handleClick() {
      alert(`Button clicked!`);
    }
  },
  // computed 옵션: 계산된 속성을 정의
  computed: {
    /**
     * method        : reversedMessage
     * date          : 2025-01-18
     * return        : string - message를 뒤집은 문자열
     */
    reversedMessage() {
      return this.message.split(``).reverse().join(``);
    }
  },
  // watch 옵션: 데이터 변경을 감지하여 처리
  watch: {
    /**
     * method        : userInput
     * date          : 2025-01-18
     * description   : userInput이 변경될 때 콘솔에 새로운 값을 출력
     */
    userInput(newValue) {
      console.log(`User input changed:`, newValue);
    }
  },
  // 생명주기 훅: 컴포넌트가 마운트되었을 때 실행
  mounted() {
    console.log('Component mounted! ');
  }
}
</script>
