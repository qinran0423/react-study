import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 */
export default function (props) {
	const totalNum = getTotalNum(props)
	const min = getMinNumber(props)
	const max = getMaxNumber(min, totalNum, props)
	const numbers = []
	for (let i = min; i <= max; i++) {
		numbers.push(
			<span key={i} onClick={() => toPage(i, props)} className={i === props.current ? "item active" : "item"}>{i}</span>
		)
	}
	return (
		<>
			<span
				onClick={() => toPage(1, props)}
				className={props.current === 1 ? 'item disabled' : 'item'}
			>首页</span>
			<span
				onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}
				className={props.current === 1 ? 'item disabled' : 'item'}
			>上一页</span>
			{numbers}
			<span
				onClick={() => toPage(props.current + 1 > totalNum ? totalNum : props.current + 1, props)}
				className={props.current === totalNum ? 'item disabled' : 'item'}
			>下一页</span>
			<span
				onClick={() => toPage(totalNum, props)}
				className={props.current === totalNum ? 'item disabled' : 'item'}
			>尾页</span>
			<span
				className='current'
			>{props.current}</span>
			/
			<span>{totalNum}</span>
		</>
	)
}


function getMinNumber(props) {
	let min = props.current - Math.floor(props.panelNumber / 2)
	if (min < 1) {
		min = 1
	}
	return min
}

function getMaxNumber(min, totalNum, props) {
	let max = min + props.panelNumber - 1
	if(max > totalNum) {
		max = totalNum
	}
	return max
}


function toPage(target, props) {
	if (props.current === target) {
		return
	}
	props.onPageChange && props.onPageChange(target)
}

function getTotalNum(props) {
	return Math.ceil(props.total / props.limit)

}