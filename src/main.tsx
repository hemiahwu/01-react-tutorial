import ReactDOM from "react-dom/client";
import "./index.css";

const title = "我看见的未来";
const author = "龙树谅";
const img =
  "https://img10.360buyimg.com/n1/s200x200_jfs/t1/119522/15/20383/219156/61f20c1aEb50cbad5/5eeaffe8b9873f9d.jpg";

const authorStyle = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

// 组件1
function BookList() {
  return (
    <section className="booklist">
      <Book title="他看见的未来" img={img} author={author} />
      <Book title="我看见的未来" img={img} author={author}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, impedit!
      </Book>
      <Book title="你看见的未来" img={img} author={author} />
    </section>
  );
}

interface Props {
  title: string;
  img: string;
  author: string;
  children?: string;
}

// 组件2
const Book = ({ img, title, author, children }: Props) => {
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={authorStyle}>{author}</h4>

      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
