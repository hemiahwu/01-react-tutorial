import ReactDOM from "react-dom/client";

function HelloReact() {
  return <h2>Hello React!</h2>;
}

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<HelloReact />);
