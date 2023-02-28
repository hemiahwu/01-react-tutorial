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
