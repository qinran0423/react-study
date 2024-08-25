
import React from 'react';

export default function MyFuncComp(props) {
	console.log(props)
	return <h1>函数组件内容: {props.num}</h1>
}