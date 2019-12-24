import React from 'react';
import Display from './Display';

/* eslint-disable-next-line react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Display result="5" />
      </div>
    );
  }
}
export default App;
