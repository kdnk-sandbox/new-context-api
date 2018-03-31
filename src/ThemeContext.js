import React from "react";
import { render } from "react-dom";

const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: "light",
  };

  render() {
    return <ThemeContext.Provider value={{ state: this.state }}>{this.props.children}</ThemeContext.Provider>;
  }
}

export class ThemeConsumer extends React.Component {
  render() {
    return <ThemeContext.Consumer>{context => <div>{context.state.theme}</div>}</ThemeContext.Consumer>;
  }
}
