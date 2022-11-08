/* eslint-env node */
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": 1,
    "no-debugger": "error",
    "quotes": [2, "double", { "avoidEscape": true }],
    "indent": [2, 2],
    "no-unused-vars": "off",
    "vue/html-indent": [
      "error", 4, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true
      }
    ],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ]
    }]
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
}
