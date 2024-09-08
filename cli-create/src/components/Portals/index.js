import React from 'react'
import ReactDOM from 'react-dom'



function ChildA() {
	return ReactDOM.createPortal(<div className='child-a'>
		<h1>ChildA</h1>
		<ChildB />
	</div>, document.querySelector('.modal'))
}

function ChildB() {
	return <div>
		<h1>ChildB</h1>
	</div>
}


export default function Portals() {
	return (
		<div onClick={e => {
			console.log('Portals被点击了', e.target)
		}}>
			Portals
			<ChildA />
		</div>
	)
}
