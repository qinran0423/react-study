import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFunComp'
import MyClassComp from './MyClassComp'
import Tick from './Tick'
import MyStateComp from './MyStateComp'

ReactDOM.render(<div>
	{/* <MyFuncComp num={2}/>
	<MyClassComp num={3} enable obj={{
		name: 'mick',
		age: 18
	}}
	ui={<h2>传递一个UI</h2>}
	/> */}
	<Tick num={10}/>
	<MyStateComp />
</div>, document.getElementById('root'));