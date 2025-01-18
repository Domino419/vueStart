// Vite의 설정 파일
// Vite : Vite는 프론트엔드 개발을 위해 설계된 차세대 빌드 도구로 빠른 개발 환경과 모던 번들링을 목표로 함.
// Vue.js의 창시자인 에반 유(Evan You)가 처음 개발했지만, Vue뿐만 아니라 React, Svelte 등 다른 프레임워크에서도 사용할 수 있음.

import { defineConfig } from 'vite' // Vite 설정을 정의하기 위한 함수
import vue from '@vitejs/plugin-vue' // Vue SFC(Single File Component)를 지원하는 Vite 플러그인

export default defineConfig({
  plugins: [    // Vite에서 사용할 플러그인 목록을 정의
    vue(), // Vue 플러그인을 활성화하여 .vue 파일을 처리할 수 있도록 설정
  ],
})