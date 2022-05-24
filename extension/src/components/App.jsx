import React, { Component } from 'react';
import Popup from './Popup.jsx';
import Chatwindow from './Chatwindow.jsx';

class App extends Component {

  state = {
    test: false
  }
  
  render() {
    const onClick = () => {
      chrome.runtime.sendMessage({ msg: "connectToServer" });
      this.setState({test: true});
    }

    return (
      <div className="App">
        {
          !this.state.test && <Popup onClick={() => onClick()} />
        }
        {
          this.state.test && <Chatwindow state={this.state.test}/>
        }
      </div>
    );
  }
}

export default App;