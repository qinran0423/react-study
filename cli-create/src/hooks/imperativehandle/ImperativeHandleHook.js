import React, { useImperativeHandle, useRef } from 'react'

// class Test extends React.Component {

// 	method() {
// 		console.log('method called')
// 	}

// 	render() {
// 		return <h1>Test Component</h1>
// 	}

// }


function Test(props, ref) {
	useImperativeHandle(ref, () => {
		return {
			method() {
				console.log('method called')
			}
		}
	}, [])
	return <h1>Test Component</h1>
}


const TestImperativeHandle = React.forwardRef(Test)

export default function TestImperativeHandleHook() {
	const testRef = useRef()
	return (
		<div>
			<TestImperativeHandle ref={testRef} />
			<button onClick={(e) => {
				testRef.current.method()
			}}>点击</button>
		</div>
	)
}
