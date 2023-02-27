import ReactDOM from "react-dom/client";

const Person = () => <h2>米斯特吴</h2>;
const Message = () => <p>Hello World</p>;

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Greeting />);
