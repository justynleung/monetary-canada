import React from "react";
import DelayUnmounting from "../responsive/DelayUnmounting"

function Box(props) {
    return (
      <div>
        ✨🎶✨🎶✨🎶✨🎶✨
      </div>
    )
  }
  
  const DelayedComponent = DelayUnmounting(Box)
  
  class App extends React.Component {
    state = {
      isMounted: false
    }
  
    toggle = () => {
      this.setState(state => ({ isMounted: !state.isMounted }))
    }
  
    render() {
      return (
        <div>
          <DelayedComponent delayTime={500} isMounted={this.state.isMounted} />
          <button onClick={this.toggle}>TOGGLE</button>
        </div>
      )
    }
  }

  export default Box;
