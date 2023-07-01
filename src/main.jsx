import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "../src/Root";
import { BrowserRouter } from "react-router-dom";
import { Provider as RootProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RootProvider>
      <Root />
    </RootProvider>
  </BrowserRouter>
);
