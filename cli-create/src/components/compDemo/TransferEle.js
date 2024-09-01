import React from 'react'

export default function TransferEle(props) {
	console.log(props)
	return (
		<div className='comp'>
			{props.children}
		</div>
	)
}
