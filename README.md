# rollup-plugin-monaco-editor

> A rollup plugin to import monaco editor

# Monaco Editor Version

For now, this plugin supports `monaco-editor@0.21.*` ~ `0.26.*`.

The following versions have been tested locally:

- `0.21.2`
- `0.22.3`
- `0.24.0`
- `0.25.0`
- `0.26.1`

# Usage

This plugin should be used with other plugins. including

- `@rollup/plugin-node-resolve`
- `rollup-plugin-postcss` (or other plugin can handle `.css` files)
- `@rollup/plugin-commonjs`

```javascript
// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import monaco from 'rollup-plugin-monaco-editor';

export default {
  output: {
    format: 'es',
    dir: 'dist',
  },
  // ...other config
  plugins: [
    // ...other plugins
    // handle .css files
    postcss(),
    monaco({
      languages: ['json'],
    }),
    nodeResolve(),
    commonjs(),
  ],
};
```

# Example

> NOTE: pnpm@6 is used to manage this package

```
pnpm install
pnpm build
pnpm build:example
pnpm start:example
```

visit `http://localhost:8080` to see the simple demo.

# Development

```
pnpm start
```

# LICENSE

MIT
