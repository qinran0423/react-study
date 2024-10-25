import React, { createRef, useEffect, useState } from 'react'
const ref = React.createRef()
window.timer = null

function stop() {
	clearInterval(window.timer)
	window.timer = null
}

function MoveBall(props) {
	useEffect(() => {
		const div = ref.current
		let curTimes = 0
		const disX = props.left / 1000
		const disY = props.top / 1000
		window.timer = setInterval(() => {
			curTimes++;//移动次数+1
			const newLeft = curTimes * disX;
			const newTop = curTimes * disY;
			div.style.left = newLeft + "px";
			div.style.top = newTop + "px";
			if (curTimes === 1000) {
				stop();
			}
		}, 10)
		return stop
	}, [props.left, props.top])

	return (
		<div ref={ref} style={{
			width: '50px',
			height: '50px',
			background: 'red',
			borderRadius: '50%',
			position: 'fixed',
			left: 0,
			top: 0
		}}>
		</div>
	)
}


export default function TestUseEffect() {
	const [point, setPoint] = useState({ x: 100, y: 100 })
	const InpX = createRef()
	const InpY = createRef()
	const [visible, setVisible] = useState(true)
	return (
		<div style={{
			paddingTop: 200
		}}>
			{visible && (<div>
				x: <input ref={InpX} type="number" />
				y: <input ref={InpY} type="number" />
				<button onClick={() => {
					setPoint({
						x: parseInt(InpX.current.value),
						y: parseInt(InpY.current.value)
					})
				}}>move</button>
				<MoveBall left={point.x} top={point.y} />
			</div>)}

			<button onClick={() => {
				setVisible(!visible)
			}}>show/hidden</button>

		</div>
	)
}


