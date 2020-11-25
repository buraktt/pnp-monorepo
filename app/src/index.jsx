import React from "react";
import { render } from "react-dom";
import App from "./app";

const renderProxy = (NextApp = App) => {
  return render(<NextApp />, document.getElementById("root"));
};

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    renderProxy(NextApp);
  });
}

renderProxy(App);
