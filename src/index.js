import React from "react";
import { render } from "react-dom";
import { ThemeProvider, ThemeConsumer } from "./ThemeContext";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <ThemeProvider>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <div>
        <div>
          <ThemeConsumer>
          </ThemeConsumer>
        </div>
      </div>
    </div>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
