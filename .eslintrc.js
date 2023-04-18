module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  plugins: [
    'unused-imports',
    'prefer-arrow',
    'disable-features'
  ],
  rules: {
    // Plugin unused-imports
    // used 'unused-imports/no-unused-vars-ts' instead
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      { vars: 'all', args: 'none', varsIgnorePattern: '^_' }
    ],

    // Plugin disable-features
    'disable-features/disable-async-await': 'error',
    'disable-features/disable-generator-functions': 'error',

    // Plugin prefer-arrow
    'func-style': [
      'error',
      'expression',
      { allowArrowFunctions: true }
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],

    // Vue
    'vue/no-multiple-template-root': 'off',
    'vue/require-name-property': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'any',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: []
    }],
    'vue/attribute-hyphenation': ['error', 'never', {
      ignore: []
    }],
    'vue/v-on-event-hyphenation': ['error', 'never', {
      ignore: []
    }],
    'vue/multi-word-component-names': 'off',

    // Base eslint
    'arrow-parens': ['error', 'always'],
    'no-void': ['error', { allowAsStatement: true }],
    'no-undef': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],

    // TypeScript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'comma' }
    }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // Plugin import from @vue/eslint-config-standard
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ]
      }
    ]
  },
  // Plugin import
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'import/no-default-export': 'off'
      }
    }
  ]
}
