/**
 * method        : main
 * date          : 2025-01-18
 * return        : void - Vue 앱을 초기화하고, 지정된 DOM 요소에 마운트한다.
 */
import { createApp } from 'vue';  // Vue 라이브러리에서 createApp 함수를 임포트
import App from './App.vue';       // 루트 컴포넌트 App.vue 임포트
import './assets/tailwind.css';    // Tailwind CSS 스타일시트 임포트

const app = createApp(App);      // Vue 앱 인스턴스를 생성하고 루트 컴포넌트 App을 사용
app.mount('#app');                // id가 'app'인 DOM 요소에 Vue 앱을 마운트