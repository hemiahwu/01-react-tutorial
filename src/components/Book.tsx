import { Props } from "../types/index";
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
