// Vue 라이브러리와 애플리케이션 루트 컴포넌트(App.vue) 불러오기
import Vue from 'vue'
import App from './App.vue'

// BootstrapVue 및 BootstrapVue 아이콘 컴포넌트 불러오기
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Bootstrap과 BootstrapVue의 CSS 파일 불러오기
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// BootstrapVue 및 BootstrapVueIcons 플러그인 사용 등록
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Vue 프로덕션 팁 비활성화 (콘솔 경고 제거)
Vue.config.productionTip = false

// Vue 애플리케이션 인스턴스 생성 및 #app 요소에 마운트
new Vue({render: h => h(App),}).$mount('#app')

// push !