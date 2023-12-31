module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true,
   },
   extends: [
      'plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: './tsconfig.json',
      requireConfigFile: false,
      ecmaFeatures: {
         jsx: true,
         tsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: [
      'react',
      '@typescript-eslint',
      'i18next',
      'import',
   ],
   rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-undef': [0],
      'no-restricted-globals': 'off',
      'react/jsx-indent': [2, 3],
      'react/jsx-indent-props': [2, 3],
      'jsx-a11y/label-has-associated-control': 'off',
      'no-use-before-define': 'off',
      'no-plusplus': 'off',
      'prefer-regex-literals': 'off',
      'no-useless-return': 'off',
      'react/no-array-index-key': 'off',
      'consistent-return': 'off',
      indent: ['error', 3],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'js', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      semi: ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-double'],
      quotes: ['error', 'single'],
      'no-unused-vars': 0,
      'react/button-has-type': 'off',
      'no-tabs': 'off',
      'func-names': 'off',
      'no-console': 'off',
      camelcase: 'off',
      'no-nested-ternary': 'off',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/no-unescaped-entities': 'off',
      'no-underscore-dangle': 'off',
      'i18next/no-literal-string': [
         'off',
         {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to', 'as'],
         },
      ],
      'max-len': ['error', { ignoreComments: true, code: 150 }],
      'jsx-ally/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'no-param-reassign': 'off',
   },
   globals: {
      __IS_DEV__: true,
   },
   overrides: [
      {
         files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
         rules: {
            'i18next/no-literal-string': 'off',
            'react/react-in-jsx-scope': 'off',
         },
      },
   ],
}
