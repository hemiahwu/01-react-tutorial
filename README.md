# React

## 第一章 最终效果演示

###

<div style="page-break-after: always;"></div>

## 2. 创建项目

### 1. 创建 react-tutorial 文件夹

```bash
npm create vite@latest .

npm install

npm run dev
```

### 2.清理项目结构

- 删除 App.css 文件
- 删除 App.tsx 文件
- 删除 index.css 文件

- ** 留下 main.tsx, 但删除里面的所有内容 **
- 此时的效果就是空白的页面

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 3. 第一个组件

### 1. main.tsx

```js
import React from "react";
import ReactDOM from "react-dom/client";

function HelloReact() {
  return <h2>Hello React!</h2>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HelloReact />);
```

## 4. 配置 VScode 插件

#### 1. 插件搜索 Prettier-Code formatter

#### 2. 安装 vscode 插件 ES7 React/Redux/

```bash
rcc  rfc ....
```

## 5. 函数组件细节

#### 1. 函数组件必须返回 tsx

```react
import React from "react";
import ReactDOM from "react-dom/client";

// 函数组件必须有jsx/tsx返回值
function HelloReact() {
  console.log("Hello World")
  // 无jsx/tsx返回值,就会报错
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HelloReact />);
```

### 2. JSX 规则

```jsx
// * JSX/TSX规则
//  * 1. () 格式化 将标签用()包裹起来 与return分开距离也没关系
//  * 2. return 单个根标签
//  * 3. 容器可使用div / section / article / Fragment / <></>
//  * 4. html属性名使用驼峰命名法
//  * 5. className 替换 class
//  * 6. 每个标签必须有 封闭 /

function HelloReact() {
  return <h2>Hello React!</h2>;
}
```

- ()格式化

```jsx
function HelloReact() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>
          <a href="#">米斯特吴</a>
        </li>
      </ul>
    </div>
  );
}
```

- 单个根标签

```tsx
function HelloReact() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li><a href="#">米斯特吴</a></li>
      </ul>
    </div>

    <div>多个根标签会报错</div>
  )
}
```

- 容器可使用 div / section / article / Fragment / <></> React.StrictMode

```jsx
function HelloReact() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <ul>
          <li>
            <a href="#">米斯特吴</a>
          </li>
        </ul>
      </div>
      <div>多个根标签会报错</div>
    </>
  );
}
```

- html 属性名使用驼峰命名法 例如: onClick

```jsx
function HelloReact() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Hello React");
  };

  return (
    // onClick 驼峰
    <div onClick={handleClick}>
      <h1>Hello World</h1>
      <ul>
        <li>
          <a href="#">米斯特吴</a>
        </li>
      </ul>
    </div>
  );
}
```

- className 替换 class

```jsx
function HelloReact() {
  return (
    // className
    <div className="container">
      <h1>Hello World</h1>
      <ul>
        <li>
          <a href="#">米斯特吴</a>
        </li>
      </ul>
    </div>
  );
}
```

- 每个标签必须有 封闭 /

```jsx
function HelloReact() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <ul>
        <li>
          <a href="#">米斯特吴</a>
        </li>
        {/* 封闭标签 */}
        <img src="" alt="" />
      </ul>
    </div>
  );
}
```

## 6. 组件嵌套

- 创建两个组件

```jsx
import ReactDOM from "react-dom/client";

// 创建两个组件
const Person = () => <h2>米斯特吴</h2>;
const Message = () => <p>Hello World</p>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Greeting />);

```

- 创建渲染组件

```tsx
import ReactDOM from "react-dom/client";

const Person = () => <h2>米斯特吴</h2>;
const Message = () => <p>Hello World</p>;

// 创建渲染组件
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Greeting />);
```

## 7.组件嵌套实战练习

#### 1. 基本结构

```jsx
import React from 'react'
import ReactDom from 'react-dom'

/**
 * 书店实战
 */

function BookList() {
  return <section>米修小书店</section>
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
```

#### 2. Book 组件

```jsx
function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}
// Book组件
const Book = () => {
  return <article>米修小书店</article>;
};
```

#### 3. Image/Title/Author 组件

```jsx
import React from "react";
import ReactDom from "react-dom";

/**
 * 书店实战
 */

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}
// Book组件
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg"
    alt=""
  />
);

const Title = () => <h1>我看见的未来</h1>;
const Author = () => <h4>龙树谅</h4>;
```

### 9.使用 CSS

#### 1. src 路径下创建 index.css 文件

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f1f5f8;
  color: #222;
}

h1 {
  color: red;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}

.book {
  background: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.book h1 {
  margin-top: 0.5rem;
}
```

#### 2.main.tsx 中引用并使用

```jsx
// 1. 引用
import './index.css'

/**
 * 书店实战 CSS
 */

function BookList() {
  return (
    // 2. 使用
    <section className="booklist">
      <Book />
    </section>
  )
}
// Book组件
const Book = () => {
  return (
    // 3. 使用
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

...
```

## 08. JSX 使用变量和模板语法

### 1. main.tsx 行内样式

- 为 Author 组件添加行内样式

```tsx
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    龙树谅
  </h4>
);
```

- 抽离样式

```tsx
const authorStyle = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

return (
  <article className="book">
    ...
    <h4 style={authorStyle}>{author}</h4>
  </article>
);
```

- 变量存储

```tsx
const title = "我看见的未来";
const author = "龙树谅";
const img =
  "https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg";

return (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4 style={authorStyle}>{author}</h4>
  </article>
);
```

## 09. 属性 props

### 1. 重构组件嵌套

```tsx
// Book组件
const Book = () => {
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>
    </article>
  );
};

// 删除Image Title Author
```

### 2. 两个组件的通信

- 属性传值

```tsx
// 组件1
function BookList() {}

// 组件2
const Book = () => {};
```

- 组件 1 传属性

```tsx
<Book title="他看见的未来" />
```

- 组件 2 接收属性

```tsx
const Book = (props: any) => {
  console.log(props);
};
```

- 组件 1 传更多属性

```tsx
<Book title="他看见的未来" img={img} author={author} />
<Book title="我看见的未来" img={img} author={author} />
<Book title="你看见的未来" img={img} author={author} />
```

- 接收传递过来的属性

```tsx
const Book = (props: any) => {
  console.log(props);
  return (
    <article>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4 style={authorStyle}>{props.author}</h4>
    </article>
  );
};
```

- 传递 children

```tsx
<Book title="我看见的未来" img={img} author={author}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, impedit!
</Book>
```

- 接收和使用 chilrend

```tsx
return (
  <article>
    ....
    {props.children}
  </article>
);
```

- 解构优化

```tsx
const Book = ({ img, title, author, children }: Props) => {};
```

### 3. 匹配 props 类型

```tsx
interface Props {
  title: string;
  img: string;
  author: string;
  children?: string;
}
```

## 10 列表遍历

### 1. 模拟数据

```tsx
const books = [
  {
    img: "https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg",
    title: "我看见的未来",
    author: "龙树谅",
  },
  {
    img: "https://img10.360buyimg.com/n1/s200x200_jfs/t1/80954/3/8348/449037/5d64b46eEb2eced3b/c8f3a61dea5f94c6.jpg",
    title: "孙子兵法",
    author: "孙武",
  },
  {
    img: "https://img12.360buyimg.com/n1/s200x200_jfs/t1/32489/25/19071/45178/63b362acF5b030616/f9c51afb28324bcd.jpg",
    title: "狂人日记",
    author: "鲁迅",
  },
];
```

### 2. 提升类型

```tsx
interface Props {
  title: string;
  img: string;
  author: string;
  children?: string;
}

const books: Props[];
```

### 3. 调用组件并传值

```tsx
<Book
  title={books[0].title}
  img={books[0].img}
  author={books[0].author}
/>
<Book
  title={books[1].title}
  img={books[1].img}
  author={books[1].author}
/>
<Book
  title={books[2].title}
  img={books[2].img}
  author={books[2].author}
/>
```

### 4. 通过遍历数据渲染组件

```tsx
<section className="booklist">
  {/* 2.遍历数据 */}
  {books.map((book, index) => {
    return <Book key={index} {...book} />;
  })}
</section>
```

## 11. 事件

### 1. 添加按钮

- 标签

```tsx
<article>
  ...
  <button>加入购物车</button>
</article>
```

- 设置点击事件

```tsx
const handleClick = () => {
  console.log('加入购物车')
}

const Book = ....
<article>
  ...

  <button onClick={handleClick}>加入购物车</button>
</article>
```

- 事件传参

```tsx
const handleClick = (data: Props) => {
  console.log(data)
}

const Book = ....
<article>
  ...
	{/* 直接执行事件 */}
	<button onClick={handleClick({ title, author, img })}>加入购物车</button>

</article>
```

- 调用执行事件

```tsx
{
  /* 调用执行事件 */
}
<button onClick={() => handleClick({ title, author, img })}>加入购物车</button>;
```

## 12 export & import 模块抽离

### 1. 类型抽离

- src/types/index.ts

```tsx
export interface Props {
  title: string;
  img: string;
  author: string;
}
```

### 2. 数据抽离

- src/data/index.ts

```ts
import { Props } from "../types";

export const books: Props[] = [
  {
    img: "https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg",
    title: "我看见的未来",
    author: "龙树谅",
  },
  {
    img: "https://img10.360buyimg.com/n1/s200x200_jfs/t1/80954/3/8348/449037/5d64b46eEb2eced3b/c8f3a61dea5f94c6.jpg",
    title: "孙子兵法",
    author: "孙武",
  },
  {
    img: "https://img12.360buyimg.com/n1/s200x200_jfs/t1/32489/25/19071/45178/63b362acF5b030616/f9c51afb28324bcd.jpg",
    title: "狂人日记",
    author: "鲁迅",
  },
];
```

### 3. Book 组件抽离

- src/components/Book.tsx

```tsx
import { Props } from "../types";

const authorStyle = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

const handleClick = (data: Props) => {
  console.log(data);
};

// 组件2
export const Book = ({ img, title, author }: Props) => {
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>
      <button onClick={() => handleClick({ title, author, img })}>
        加入购物车
      </button>
    </article>
  );
};
```

### 4. main.tsx 调用

```tsx
import { books } from "./data/index";
import { Book } from "./components/Book";
```

## 13. 解决警告问题

### 1. main.tsx 抽离 BookList 并引入

```tsx
import ReactDOM from "react-dom/client";
import "./index.css";

// 引入
import { BookList } from "./views/BookList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
```

### 2. 抽离 BookList

- Src/views/BookList.tsx

```tsx
import { books } from "../data/index";
import { Book } from "../components/Book";

// 组件1
export function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}
```
