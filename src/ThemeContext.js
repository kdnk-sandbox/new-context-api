import React from 'react';

const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {

  constructor(props) {
    this.state = {
      theme: 'light',
    };
  }

  render() {
    <ThemeContext.Provider vlaue={this.state.theme}>
      { this.props.children }
    </ThemeContext.Provider>
  }
}

export class ThemeConsumer extends React.Component {
  render() {
    <ThemeContext.Consumer>
      { theme => (
        <div>
          {theme}
        </div>
      ) }
    </ThemeContext.Consumer>
  }
}
