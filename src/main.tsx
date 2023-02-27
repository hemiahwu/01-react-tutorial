import ReactDOM from "react-dom/client";

// 函数组件必须有jsx/tsx返回值
// function HelloReact() {
//   console.log("Hello World")
//   // 无jsx/tsx返回值,就会报错
//   return <h2>Hello React!</h2>;
// }

// * JSX/TSX规则
//  * 1. () 格式化 将标签用()包裹起来 与return分开距离也没关系
// function HelloReact() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <ul>
//         <li>
//           <a href="#">米斯特吴</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
//  * 2. return 单个根标签
// function HelloReact() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <ul>
//         <li><a href="#">米斯特吴</a></li>
//       </ul>
//     </div>

//     // <div>多个根标签会报错</div>
//   )
// }
//  * 3. 容器可使用div / section / article / Fragment / <></>
// function HelloReact() {
//   return (
//     <>
//       <div>
//         <h1>Hello World</h1>
//         <ul>
//           <li>
//             <a href="#">米斯特吴</a>
//           </li>
//         </ul>
//       </div>
//       <div>多个根标签会报错</div>
//     </>
//   );
// }
//  * 4. html属性名使用驼峰命名法
// function HelloReact() {
//   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     console.log("Hello React");
//   };

//   return (
//     // onClick 驼峰
//     <div onClick={handleClick}>
//       <h1>Hello World</h1>
//       <ul>
//         <li>
//           <a href="#">米斯特吴</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
//  * 5. className 替换 class
// function HelloReact() {
//   return (
//     // className
//     <div className="container">
//       <h1>Hello World</h1>
//       <ul>
//         <li>
//           <a href="#">米斯特吴</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
//  * 6. 每个标签必须有 封闭 /
// function HelloReact() {
//   return (
//     <div className="container">
//       <h1>Hello World</h1>
//       <ul>
//         <li>
//           <a href="#">米斯特吴</a>
//         </li>
//         {/* 封闭标签 */}
//         <img src="" alt="" />
//       </ul>
//     </div>
//   );
// }

function HelloReact() {
  return <h2>Hello React!</h2>;
}

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<HelloReact />);
