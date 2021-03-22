# 循环依赖

- commonjs: 值，只会使用之前的值
- es: 引用（即每次访问拿到的都是最新的）

webpack 会将 es 中 import 提到顶部，并且：

- `__webpack_require__.r(__webpack_exports__)`, `r` 中为 `__webpack_exports__` 定义 `{ __esModule: true, [Symbol.toStringTag]: 'Module' }`
- 先 defineProperty(`__webpack_require__.d`) （export 的那些东西包括 default，以 getter 定义）
- 然后 `__webpack_require__` 导入依赖

**注意** `let` 的 TDZ 问题造成的干扰，如果在执行 `let xxx` 之前访问会抱错。

```js
console.log(x); // Error
let x;
console.log(x); // undefined
```
