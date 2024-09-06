import React, { Component } from "react"
// import Ref from './components/Ref'
// import ForwardRef from './components/Forward/ForwardHoc.jsx'
// import Context from "./components/Context/NewContext"
import TaskContainer from './components/pureComp/TaskContainer'
export default class App extends Component {
  render() {
    return (
      <div>
        <TaskContainer />
      </div>
    )
  }
}
