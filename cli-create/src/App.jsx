import React, { Component } from "react"
// import Ref from './components/Ref'
import ForwardRef from './components/Forward/ForwardHoc.jsx'
export default class App extends Component {
  render() {
    return (
      <div>
        <ForwardRef />
      </div>
    )
  }
}
