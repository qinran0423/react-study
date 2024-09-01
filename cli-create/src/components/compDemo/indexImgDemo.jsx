import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './asserts/1.jpg'
import img2 from './asserts/2.jpg'
import img3 from './asserts/3.jpg'
import img4 from './asserts/4.jpg'
import './index.css'

const imgs = [img1, img2, img3, img4]

let index = 0	

let timer

let container = document.getElementById('root')

function start() {
	stop()
	timer =	setInterval(() => {
		index = (index + 1) % imgs.length
		render()
	}, 2000);
}

function render() {
	ReactDOM.render(<img src={imgs[index]} alt='' />, container);
}

render()
start()


function stop(){
	clearInterval(timer)
}


container.onmouseenter = () => {
	stop()
}

container.onmouseleave = () => {
	start()
}