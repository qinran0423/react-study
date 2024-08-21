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
	return (
		<>
			<span className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
			<span className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
			<span className={props.current === totalNum ? 'item disabled' : 'item'}>下一页</span>
			<span className={props.current === totalNum ? 'item disabled' : 'item'}>尾页</span>
			<span className='current'>{props.current}</span>
			/
			<span>{totalNum}</span>
		</>
	)
}


function getTotalNum(props) {
	return Math.ceil(props.total / props.limit)

}