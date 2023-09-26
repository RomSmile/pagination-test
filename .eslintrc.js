module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    module: ['components'],
    ecmaVersion: 12,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.husky/', '.vscode/', 'webpack.config.js'],
  plugins: ['react', '@typescript-eslint', 'prettier', 'eslint-plugin-react'],
  rules: {
    //Это правило требует явно указывать типы возвращаемых значений для всех экспортируемых функций и методов в модуле.
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    // eslint-disable-next-line max-len
    //Это правило запрещает использование типа any, который является неявным типом безопасности и может скрыть потенциальные ошибки в вашем коде.
    '@typescript-eslint/no-explicit-any': 'error',
    // eslint-disable-next-line max-len
    //Это правило отключено. В обычных случаях, TypeScript не рекомендует использовать комментарии с инструкциями компилятору (такие как // @ts-ignore)
    '@typescript-eslint/ban-ts-comment': 'off',
    //Это правило отключено. Оно предлагает запретить определенные типы данных, такие как Object, Function, и так далее.
    '@typescript-eslint/ban-types': 'off',
    // eslint-disable-next-line max-len
    //Это правило отключено. Обычно оно требует наличие JSDoc комментариев (документационных комментариев) для всех функций.
    'require-jsdoc': 'off',

    //Запрет лишних пробелов
    'no-multi-spaces': 'error',

    // 3. Запретить пустые блоки кода
    'no-empty': 'error',

    // 4. Запретить неявное преобразование типов
    'no-implicit-coercion': 'error',

    // 5. Обязательное использование === и !== вместо == и !=
    eqeqeq: 'error',

    // 6. Запретить использование console.log и др. в production-окружении
    'no-console': 'error',

    // 8. Запретить пустые функции, кроме конструкторов
    'no-empty-function': ['error', { allow: ['constructors'] }],

    // 9. Запретить использование неэкранированных HTML сущностей
    'react/no-unescaped-entities': 'error',

    // 10. Предотвратить опечатки в именах компонентов
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // 11. Предотвратить использование нескольких компонентов в файле
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // 12. Запретить использование функций внутри циклов (потенциальная производительность)
    'no-loop-func': 'error',

    // 18. Запретить использование устаревших методов жизненного цикла в React
    'react/no-deprecated': 'error',

    // 19. Запретить неявное использование return в методах render компонентов React
    'react/require-render-return': 'error',

    // 21. Запретить использование setState внутри компонентов без проверки жизненного цикла
    'react/no-direct-mutation-state': 'error',

    // 22. Запретить использование опасных методов в React (например, dangerouslySetInnerHTML)
    'react/no-danger': 'error',

    // 23. Максимальная длинна строки
    'max-len': ['error', 120],
  },
};
