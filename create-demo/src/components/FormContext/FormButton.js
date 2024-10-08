import React from 'react'
import { Consumer } from './context'

export default function FormButton(props) {
	return (
		<div>
			<Consumer>
				{ctx => {
					return (
						<button onClick={() => {
							ctx.submit();
						}}>
							{props.children}
						</button>
					);
				}}
			</Consumer>
		</div>
	)
}
