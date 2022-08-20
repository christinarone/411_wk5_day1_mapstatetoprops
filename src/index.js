import React from "react";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import * as ReactDOM from 'react-dom';

import App from "./App";

ReactDOM.render(
<Provider store={store}>
<React.StrictMode>
    <App />
</React.StrictMode>
</Provider>

,
document.getElementById('root')
);


const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
