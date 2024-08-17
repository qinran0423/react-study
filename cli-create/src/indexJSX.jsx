import React from 'react';
import ReactDOM from 'react-dom';

// 每个JSX表达式，有且仅有一个根节点
// var h1 = (<h1>Hello World <span>span元素</span></h1>)
var h1 = (
	<>
		<h1>hello world</h1>
		<p>p标签</p>
	</>
)

// 每个JSX元素必须结束（XML规范）
var img = (
	<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
)


/*

	在JSX中嵌入表达式
	- 在JSX中使用注释
	- 将表达式作为内容的一部分
  	- null、undefined、false不会显示
		- 普通对象，不可以作为子元素
		- 可以放置React元素对象
*/ 
var a = 100 , b = 200

// var obj = {name: 'John', age: 30}
var obj	= <h1>Hello World</h1>

var div = ( 
	<div>
		{a} + {b} = {a+b}
		{null}
		{undefined}
		{false}
		{obj}

	</div>
)


var src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
var cls = "images"
var img1 = (
	<div>
		<img src={src} className={cls} style={{
			border: '1px solid red',
		}} alt=""/>
	</div>
)

ReactDOM.render(img1, document.getElementById('root'));