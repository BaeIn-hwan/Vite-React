module.exports = {
  extends: [
    'stylelint-order',
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: {
    'no-eol-whitespace': true,
    'at-rule-no-unknown': null,
    'string-quotes': 'single',
    'comment-no-empty': null,
    'custom-property-pattern': null,
    'function-no-unknown': null,
    'declaration-block-trailing-semicolon': 'always',
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      },
    ],
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['screen']
      }
    ],
    'scss/comment-no-empty': [
      true,
      {
        severity: 'warning'
      }
    ],
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dollar-variable-colon-newline-after': null,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/function-color-relative': [
      true,
      {
        severity: 'warning',
        message: 'Use the new scss color functions instead!',
      },
    ],
    'scss/media-feature-value-dollar-variable': [
      'always',
      {
        severity: 'warning',
        ignore: ['keywords']
      },
    ],
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': [
      'content',
      'display',
      'justify-content',
      'align-items',
      'overflow',
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
      'float',
      'clear',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-radius',
      'background',
      'box-shadow',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'color',
      'text-align',
      'line-height',
      'vertical-align',
      'opacity',
      'cursor',
      'box-sizing',
    ],
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['text-size-adjust', 'appearance', 'display']
    }],
    'value-no-vendor-prefix': [true, {
      ignoreValues: ['box']
    }],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block'],
        ignoreAtRules: ['import', 'include']
      }
    ],
  },
}