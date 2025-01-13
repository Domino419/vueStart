// Vue 애플리케이션의 진입점 파일
// Vue의 기본적인 기능과 프로젝트에 필요한 외부 리소스를 불러옴.
import { createApp } from 'vue'  ;  // Vue 3의 애플리케이션 인스턴스를 생성하는 함수
import App from './App.vue'      ; // 최상위 Vue 컴포넌트(App 컴포넌트) 가져오기

// Foundation CSS 프레임워크의 플로트 기반 레이아웃 스타일 불러오기
import 'foundation-sites/dist/css/foundation-float.min.css';

// Vue 애플리케이션 인스턴스를 생성하고 최상위 컴포넌트(App)를 #app DOM 요소에 마운트
createApp(App).mount('#app') ;
