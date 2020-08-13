module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars':"off",
    'vue/require-v-for-key':'off',
    'vue/no-unused-vars':'off',
    'no-irregular-whitespace':'off',
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
  }
};
