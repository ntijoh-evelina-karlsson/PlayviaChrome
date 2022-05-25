import React, { Component } from 'react';
import Popup from './Popup.jsx';
import Chatroom from './Chatroom.jsx';

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
          this.state.test && <Chatroom state={this.state.test}/>
        }
      </div>
    );
  }
}

export default App;