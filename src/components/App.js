import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
      renderResult: false,
      errorOccurance: false,
    };
  }
  handleClick = (btnName) => {
    this.setState(prevState => calculate(prevState, btnName));
  }

  render() {
    return (
      <div id="app">
        <Display result={ this.state.next } operator ={ this.state.operation }/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
}
export default App;
