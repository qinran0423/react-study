import React, { useState } from 'react';

export default function TestUseState() {
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(true);
	return (
		<div>
			<p style={{ display: visible ? 'block' : 'none' }}>
				<button onClick={() => {
					setCount(count - 1)
				}}>-</button>
				<span>{count}</span>
				<button onClick={() => {
					setCount(count + 1)
				}}>+</button>
			</p>
			<button onClick={() => {
				setVisible(!visible)
			}}>show/hidden</button>
		</div>
	)

}


// State hook 是一个在函数组件中使用功能的函数 useState，用于在函数组件中使用状态


/*
1. 第N次调用useState函数
2. 检查该节点的状态数组是否存在下标为N的元素，
3. 如果不存在
	1. 状态表格中无内容
	2. 使用默认值创建一个状态
	3. 将该状态加入到状态数组中
4. 存在
	1. 忽略默认值
	2. 返回该状态

只要改变状态值，函数组件一定重新渲染 
*/