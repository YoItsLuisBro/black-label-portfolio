/** @type {import('eslint').Linter.Config} */
module.exports = {
  // ...your existing config
  overrides: [
    {
      files: [
        '*.{config,conf}.js',
        '*.{config,conf}.cjs',
        '*.{config,conf}.mjs',
        'vite.config.*',
        'tailwind.config.*'
      ],
      env: { node: true }
    }
  ]
}
