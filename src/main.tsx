import ReactDOM from "react-dom/client";
import "./index.css";

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
    <article className="book">
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
