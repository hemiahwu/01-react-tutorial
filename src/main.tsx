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

function BookList() {
  return (
    <section className="booklist">
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

const Image = () => <img src={img} alt="" />;

const Title = () => <h1>{title}</h1>;
const Author = () => <h4 style={authorStyle}>{author}</h4>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
