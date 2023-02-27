import ReactDOM from "react-dom/client";
import "./index.css";

interface Props {
  title: string;
  img: string;
  author: string;
}
const books: Props[] = [
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
const authorStyle = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.25rem",
};

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

const handleClick = (data: Props) => {
  console.log(data);
};

// 组件2
const Book = ({ img, title, author }: Props) => {
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
