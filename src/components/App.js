/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
