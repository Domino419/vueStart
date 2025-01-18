import { createApp } from 'vue' ;
import App from './App.vue' ;
import 'purecss/build/pure-min.css' ;    // Pure css 임포트
import './style.css'                     // 프로젝트에 맞는 커스텀 스타일 추가

createApp(App).mount('#app')

// Pure css 임포트 에러 나서 실행 안되길래 npm list purecss 로 확인하니까 empty 로 확인 - npm install purecss로 설치 후 정상 임포트 가능
// 파일 존재 여부 바로 확인 하려면 node_modules 디렉토리에서 경로: node_modules/purecss/build/pure-min.css로 확인.
