import React, { Component } from "react"
import { A, B } from "./components/HOC/TestHoc"
import withLog from "./components/HOC/withLog"
import withLogin from "./components/HOC/withLogin"
const ALogin = withLogin(withLog(A))
const BLogin = withLogin(withLog(B))
export default class App extends Component {
  render() {
    return (
      <div>
        <ALogin isLogin num={1} />
        <BLogin isLogin num={2} />
        <button
          onClick={() => {
            this.setState({})
          }}>
          隐藏/显示
        </button>
      </div>
    )
  }
}
