module.exports = {
  root: true,
  env: {
    node: true,
  },
  // Vue와 TypeScript 모두를 지원하기 위한 확장 설정
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // vue-eslint-parser를 최상위 파서로 사용하여 SFC를 올바르게 파싱
  parser: "vue-eslint-parser",
  parserOptions: {
    // 내부 파서로 @typescript-eslint/parser를 사용 (TypeScript 전용 파서)
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    // 필요에 따라 추가 규칙을 설정합니다.
  }
};
