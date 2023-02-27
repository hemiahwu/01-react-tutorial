import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./data/index";
import { Book } from "./components/Book";

// 组件1
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
