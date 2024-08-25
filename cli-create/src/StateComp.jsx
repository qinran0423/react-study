
import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0
    }

    handleClick = () => {
				/**
				 * setState 它状态的改变，可能是异步的
				 * 
				 * - 如果改变状态的代码处于某个HTML元素的事件处理函数中，则其是异步的，否则是同步的
				 * 
				 * 如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态
				 */

				
				this.setState({
					n: this.state.n + 1
				}, ()=>{
					console.log(this.state.n)
        });

				this.setState(cur => ({
					n: cur.n + 1
				}))
				
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>
                    {this.state.n}
                </h1>
                <p>
                    <button onClick={this.handleClick}>+</button>
                </p>
            </div>
        )
    }
}


