import React from "react";
import { render } from "react-dom";

const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  state = {
    theme: "light",
    count: 1,
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          actions: {
            increment: () => {
              this.setState(prevState => {
                return { count: prevState.count + 1 };
              });
            },
            decrement: () => {
              this.setState(prevState => {
                return { count: prevState.count - 1 };
              });
            },
          },
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export class ThemeConsumer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <div>
              <div>{value.state.count}</div>
              <button onClick={value.actions.increment}>+</button>
              <button onClick={value.actions.decrement}>-</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
