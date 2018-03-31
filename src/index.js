import React from "react";
import { render } from "react-dom";
import { ThemeProvider, ThemeConsumer } from "./ThemeContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <ThemeProvider>
    <div style={styles}>
      <div>
        <div>
          <ThemeConsumer />
        </div>
      </div>
    </div>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
