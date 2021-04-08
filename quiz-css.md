# CSS 的使用

如果你最近不常写 CSS，那么写上简单的文字说明也行，  
如果你常写 CSS，那么附上简单的 Demo 代码更好。

Demo 代码可以新建一个或多个文件（不限），  
例如新建一个 `writing-style.css`，并在其中完成。

## Q1

下面是 PostCSS 编译后生成的代码，如果你来写源码，你会怎么写。
（实现方式不限，比如可以用 CSS in JS、Vue style 等方式）

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.container > div:nth-child(1) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
```

## Q2

你用过哪些 CSS 的方法论和工具  
简单描述即可，例如：

> - PostCSS + autoprefixer 用来编译 CSS 代码，提高部分 CSS 的浏览器兼容性。
>
> - BEM 是用来处理 class 命名的，有一个三段式命名规则，形如 ↓：
>
> ```css
> .form--theme-xmas {
> }
> ```

答：
 > - 使用less或者sass 实现样式嵌套写法，方便阅读代码，继承样式。可以使用函数或者变量
 > - 使用css Modules 产生局部作用域 来避免样式污染
 > - 使用React-classnames库，可以给一个标签添加多个样式名，可以直接在classname内部传入动态class名并进行条件判断
 > - 初始化所有标签的样式，给个默认样式。这样做可以规避浏览器差异带来的样式不统一。
