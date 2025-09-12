import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './State/store';
=======
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>
=======
      <App />
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
    </BrowserRouter>
  </StrictMode>
);
