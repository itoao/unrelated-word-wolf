const fs = require('fs')

/**
 * @param {string} file
 * @returns {string[]}
 */
function loadPattern (file) {
  return fs.readFileSync(file, 'utf8')
    .split('\n')
    .map(line => line.trim().replace('\\#', '#'))
    .filter(line => line && !line.startsWith('#'))
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  ignorePatterns: [
    ...loadPattern('.gitignore'),
    ...loadPattern('.eslintignore')
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off'
  }
}
