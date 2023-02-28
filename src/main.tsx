import ReactDOM from "react-dom/client";
import "./index.css";
import { BookList } from "./views/BookList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<BookList />);
