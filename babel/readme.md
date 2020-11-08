## 命令行

```shell
# 命令行 + 核心包
yarn add @babel/cli @babel/core -D
```

- @babel/cli: 命令行
- @babel/core: AST

## 插件(plugins)和预设(presets)

### 插件

- 从左往右执行

```js
{
  plugins: ['a', 'b', ['c', { cc: '配置参数' }]];
}
```

命名简写示例：

- `babel-plugin-name` 等于 `name`
- `@babel/plugin-name` 等于 `@babel/env`
- `@org/babel-plugin-name` 等于 `@org/name`

### 预设(presets)

预设就是一堆插件的组合，只是为了简化插件配置的步骤。但是要注意下面两点：

- 预设的执行顺序晚于插件
- 预设数组中是从右往左执行（插件是从左往右）

```js
{
  presets: [
    [
      '@babel/env',
      {
        target: {
          browsers: ['last 10 versions', 'ie >= 9']
        }
      }
    ],
    '@babel/stage-0'
  ];
}
```

命名简写示例：

- `babel-preset-name` 等于 `name`
- `@babel/preset-name` 等于 `@babel/env`
- `@org/babel-preset-name` 等于 `@org/name`

### 自定义插件

### 自定义预设

## Polyfill

以上只是做了语法层面的转译，但是一些新增的 API 依然没有自动被添加，此时需要 `@babel/polyfill` 来解决。它需要在代码中自行引入：

```js
import '@babel/polyfill'; // 记得先 install

Object.assign({}, { a: 'aa' });
```

上面这种方式没有做到按需 polyfill，其实预设 `@babel/preset-env` 里已经有 polyfill 功能，只需要配置一下参数。

```js
{
  plugins: [
    [
      '@babel/env', // 即 @babel/preset-env
      {
        useBuiltIns: 'usage',
        corejs: { version: '2' }
      }
    ]
  ];
}
```

这样，类似 `Object.assign` 这种语法都会从 core-js 中 polyfill，按照实际使用按需引入，如 `require("core-js/modules/es6.object.assign");`。


## transform-runtime

babel 在编译时，会生成一些辅助函数，比如

```js
class Foo {}

// 会生成辅助函数 _classCallCheck
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo() {
  _classCallCheck(this, Foo);
};
```

但这些辅助函数会给每一个文件都生成，最终会形成大量重复代码，通过 `@babel/plugin-transform-runtime` 来提供公共辅助函数：

```js
{
  plugins: ['@babel/plugin-transform-runtime']
}
```