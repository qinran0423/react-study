import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFunComp'
import MyClassComp from './MyClassComp'

ReactDOM.render(<div>
	<MyFuncComp num={2}/>
	<MyClassComp num={3} enable obj={{
		name: 'mick',
		age: 18
	}}
	ui={<h2>传递一个UI</h2>}
	/>
</div>, document.getElementById('root'));