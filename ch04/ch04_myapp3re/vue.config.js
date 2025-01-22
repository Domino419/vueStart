// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      });
      return definitions;
    });
  },
});


// 교재와 다름.
// 크롬 개발자 도구에서 에러 메시지 확인
// main.js:5 Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle. For more details, see https://link.vuejs.org/feature-flags.
// __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ 컴파일 타임 플래그가 정의되지 않아서 뜨는 에러로 해당 플래그를 vue.config.js에 추가하여 에러 메시지 클리어.

